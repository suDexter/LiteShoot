<template name="test_cp"><!--组件名称-->
	<view><!--组件样式-->
	    <view class="u-m-t-20">
	    	<u-cell-group>
	    		<u-cell-item icon="rmb-circle" title="支付" @click="clickPay"></u-cell-item>
	    	</u-cell-group>
	    </view>
	</view>
</template>
<script>
export default {
	//组件名称
	name: "test_cp",
	//属性
	props: {
		TP: {//属性名称
			type: String,//属性类型
			value: "sdalf"
		},
	},
	//组件生命周期
	created:function(obj){
	
	},
	methods: {
		clickPay: function(e){//点击支付标签，跳转到支付页面
			   console.log('PayClicked');
			   uni.navigateTo({
			       url: '../pages/test'
			});
		},
	}
}
</script>

<style>
</style>
 