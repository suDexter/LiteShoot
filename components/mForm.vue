<template>
	<view>
		<form @submit="formSubmit">
		<view class="uni-warp">
			<block v-for="(item, index) in form.data" :key="index" >
				<view class="uni-list" :style="item.hide  ? 'display:none' :'display:block' " >
						<view class="uni-list-cell f-line" > 
							<view class="w225 flex  flex-direction-row f-title f-line" v-if="item.label != '' " >
								<text class="requiredred"  v-if="item.required">*</text>
								<view class="uni-list-cell-left">{{item.label}}:</view>
							</view>
							<view :class="item.label == '' ? 'uni-list-cell-db' : 'uni-list-cell-db f-int'" >
								<block   v-if="item.ktype == 'picker' " >
									<!-- <input class="uni-input uni-hidden" type="text" :name="item.name" :disabled="item.disabled"   :value="pdate[index].value"/> -->
									<picker :name="item.name" :mode="item.type"  :disabled="item.disabled" :value="item.value" :start="item.start" :end="item.end" @change="bindDateChange($event,index)">
										<view class="uni-input">{{pdate[index].value}}</view>
									</picker>
								</block>
								
								<block  v-else-if="item.ktype == 'defaultpicker' ">
									<input class="uni-input uni-hidden" type="text" :name="item.name"   :value="pindex[index].value"  :disabled="item.disabled"/>
									<picker @change="bindPickerChange($event,index)"  :disabled="item.disabled"  :value="pindex[index].cindex" :range="item.array" range-key="name" >
										<view class="uni-input">{{item.array[pindex[index].cindex].name}}</view>
									</picker>
								</block>
								<block v-else-if="item.ktype == 'radio'">
									<input class="uni-input uni-hidden"  :name="item.name"  type="text"   :value="radioVal[index].value"/>
									<radio-group   class="uni-radio-group" :disabled="item.disabled" @change="radioChange($event,index)" >
										<label class="uni-list-cell-pd" v-for="(itemradio, radioIndex) in item.array" :key="itemradio.value">
											<view class="uni-f-radio">
												<radio color="#9F0000" style="transform:scale(0.6)" :disabled="item.disabled" :value="itemradio.value" :checked="radioVal[index].value === itemradio.value" />
											</view>
											<view class="uni-f-radioName">{{itemradio.name}}</view>
										</label>
									</radio-group>
								</block>
								<block  v-else-if="item.ktype == 'input' && item.type =='text' ">
									<input  :style="item.disabled ? 'color:#505050' : ' '"  :value="item.value" :name="item.name"  type="text" :placeholder="item.placeholder" :disabled="item.disabled"/>
								</block>
								<block v-else-if="item.ktype == 'textarea' ">
									<textarea v-if="item.height != undefined" :name="item.name" :placeholder="item.placeholder" :value="item.value" :disabled="item.disabled"  :style="{height:item.height+'px'}"/>
									<textarea v-else auto-height :name="item.name" :placeholder="item.placeholder" :value="item.value" :disabled="item.disabled"  :style="{height:item.height+'px'}"/>
								</block>
								<block v-else-if="item.ktype == 'rate' ">
									<uni-rate :value="item.value" color="#bbb" :disabled="item.disabled" active-color="red" :is-fill="false" />
								</block>
							</view>
						</view>
					<!-- </view> -->
				</view>
			</block>
		</view>
			<view class="btn-large flex flex-direction-row flex-justify-spacebetween">
				<block v-if="!form.savehide ">
					<button  form-type="submit" data-type='save' :class="form.workflow ? 'add-btn':' add-btn w1000 '">保存</button>
				</block>
				<block v-if="form.saveBtn.length !=0" v-for="(item, index) in form.saveBtn" :key="index">
					<button form-type="submit" class="add-btn" :data-type="item.type">{{item.name}}</button>
				</block>
				<block v-if="form.workflow">
					<button form-type="submit" class="add-btn" v-if="wfFetchback"  data-type="wfFetchback">撤回</button>
					<button form-type="submit" :class="form.savehide && !wfFetchback ? 'add-btn w1000' :'add-btn btn-blue'" v-if="wfSend"   data-type="wfSend">发送</button>
				</block>
			</view>
		</form>
	</view>
</template>

<script>
	var  graceChecker = require("../../../common/graceChecker.js");
	export default {
		name: "m-form",
		props: {
			form: Object
		},
		data() {
			return {
				pindex:[],
				pdate:[],
				radioVal:[],
				imgarr:[],
				viewimg:[],
				wfSend:false,
				wfFetchback:false,
				save:true,
				show:false,
				style:'display:block',
				righttext:'展开'
			};
		},
		methods: {
		
			changeAdd(e,item,index){
				this.$emit("changeAdd", {//
					item: item,
					index: index
				})
			},
			bindDateChange:function(e,index){
				var that = this;
				that.form.data[index].value = e.detail.value;
				console.log(that.form.data[index].value)
				that.pdate[index].value = e.detail.value;
			},
			bindPickerChange: function(e,index) {
				var that = this;
				var array=that.form.data[index].array;
				that.pindex[index].cindex = e.detail.value;
				that.pindex[index].value = array[e.detail.value].value;
			},
			formSubmit(e){
				var that = this;
				var list = that.form.data;
				var saveurl = that.form.saveUrl;
				if(e.mp.detail.target != undefined){
					var dType = e.mp.detail.target.dataset.type;
				}else{
					var dType ='';
				}
				var wfid = that.form.wfid;
				var wftypecode = that.form.wftypecode
				if(list.length>0){
					var rule = [];
					for(var i = 0;i<list.length;i++){ //生成表单验证规则
						if(list[i].required){
							if(list[i].placeholder == ''){
								list[i].placeholder = list[i].label +'不为空'
							}
							rule.push({name:list[i].name,checkType:"notnull",checkRule:"",errorMsg:list[i].placeholder})
						}
					}
					var formData = e.detail.value;
					var checkRes = graceChecker.check(formData,rule);
					var strdata = '['+JSON.stringify(formData)+']';//后端接收的表单类型
					var str = JSON.parse(strdata)
					that.$emit('saveBefterCallBack',e);//扩展保存前回调
					if(that.form.savetype == undefined){
						var arr = '';
						for (var i in formData) {
							if(i != 'version'){
								arr += ''+that.form.code+'.'+i+'='+encodeURI(formData[i])+'&';
							}else{
								var num=parseInt(formData[i])+1;
								arr += ''+i+'='+num+'&';
							}
						}
					}
					arr = arr.substring(0, arr.lastIndexOf('&')); //拼接//后端接收的表单类型
					// console.log(formData)
					// 	console.log(arr)
					var formdatas;
					var formflag;
					if(that.form.savetype == undefined){
						formdatas =arr;
						formflag = true;
					}else{
						formdatas =JSON.stringify(str);
						formflag = false;
					}
				
					if(dType == 'save'){//判断按钮状态
						if(checkRes){
							that.$httpService.post(saveurl,formdatas,formflag).then(res => {
									if(res.data.code == 0){
										uni.showToast({title:'保存成功',icon:"none"});
										that.$emit('savecallback',that.form.id);
									}else{
										uni.showToast({title: res.data.message,icon:"none"});
									}                 
							   },error => {console.log(error);})
						}else{
							uni.showToast({title:graceChecker.error,icon:"none"});
						}
					}else if(dType == 'wfSend'){//工作流发送
						
					}else if(dType == 'wfFetchback'){//工作流撤回
						
					}
				}
			},
		},
		mounted(){
			setTimeout(() => {
				var that = this;
				var list = that.form.data;
				var pdate = that.pdate;
				var indexitem = [],pdateitem=[],radioValitem=[];
				if(list.length>0){
					for(var i = 0;i<list.length;i++){
						if(list[i].cindex ==undefined){
							list[i].cindex  = 0;
						}
						if(list[i].ktype =='defaultpicker'){
							var itemarr = list[i].array;
							if(list[i].value != ''){
								for(var j=0;j<itemarr.length;j++){
									if(list[i].value == itemarr[j].value){
										list[i].cindex = j;
									}
								}
							}
							
						}
						pdateitem.push({'value':list[i].value})
						radioValitem.push({'value':list[i].value})
						indexitem.push({'cindex':list[i].cindex ,'value':list[i].value})
					}
				}
				that.radioVal = radioValitem;//初始radio选中值
				that.pdate = pdateitem;//初始data选中值
				that.pindex = indexitem;//初始自定义picker选中值
				// that.inituploadFile(that.form.code,that.form.id);//读取上传文件
				// that.checkworkflow();//检查工作流
			}, 600);
			
		},
		created () {
		   
		  }
	}
</script>

<style>

.requiredred{
    color: red;
}
.uni-warp {
background-color:#FFFFFF;
padding:5px 12px;
}

.uni-list{
	min-height: 100rpx;
	border-bottom:1px solid #f2f2f2;
}
.uni-list-cell{
	min-height: 100rpx;
}
/* .uni-list:last-child{
	border-bottom:none;
} */

.uni-input{
	padding:0 ;
}
.uni-hidden{
	display: none;
}
.btn-large{
	position: fixed;
	bottom: 0;
	width: 100%;
	left: 0;
	background-color: #fff;
	padding: 16rpx;
	box-shadow: 0 3px 10px #ccc;
	z-index:11;

}
.add-btn{
	width: 50%;
	background-color: #007AFF;
	color: #fff;
	margin: 0 16rpx;
}
.w1000{
	width: 100%;
}
.w225{
	width: 200rpx;
}
.btn-blue{
	background-color: #0A98D5;
}
.uni-warp .uni-list-cell-db{
	position: relative;
}
.uni-warp .uni-list-cell-db .uni-btn-one{
	padding-right:30px;
}
.uni-warp .uni-list-cell-db .uni-btn-two{
	padding-right:60px;
}
.uni-icon-com{
	width: 22px;
	position: absolute;
	right: 0;
	top:-5px;
}
.uni-text-com{
	width: 22px;
	position: absolute;
	right: 0;
	top:0;
}
.uni-icon-com-l{
	width: 22px;
	position: absolute;
	right: 25px;
	top:-5px;
}
.uni-list textarea{
	width: auto;
}
.uni-radio-group .uni-list-cell-pd{
	padding: 6rpx;
	width:auto;
	float:left;

}
.uni-radio-group .uni-f-radio{
	width: 25px;
	float: left;
	position: relative;
	top: -2px;
}
/* #ifdef MP-ALIPAY */
.f-title{
	position: absolute;
	left: 0;
	top: 0;
	width: 200rpx;
}
.f-int{
	width: 100%;
	padding-left: 200rpx;
	line-height: 100rpx;
}
.f-line{
	padding-top: 25rpx;
	padding-bottom: 25rpx;
}
 /* #endif */
.imageList{
	width: 100%;
	display:block;
	padding-left:7px;
}
.imgclear{
	position: absolute;
	right:-8px;
	top: -16px;
	width: 25px;
	height: 25px;
	border-radius: 100%;
}

.img-list{
	width: 30%;
	height: 100px;
	float: left;
	padding: 10rpx;
	border:1px solid #9F0000;
	margin: 5px 1.5%;
	position: relative;
	text-align:center;
}
.img-list image{
	width: 100%;
}
.formtitle{
	border-bottom: 1px solid #f2f2f2;
	padding: 16rpx 50px 16rpx 12px;
	position: relative;
}
.formtitle text{
	position: absolute;
	right: 12px;
	top: 16rpx;
}
</style>

