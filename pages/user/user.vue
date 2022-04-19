<template>
	<view>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-10" style="margin-top:20rpx;" @click="clicklogin">
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140" style="margin-top:15rpx;"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">苏南川</view>
				<view class="u-font-14 u-tips-color">id:A1405025502</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="scan" color="#969799" size="28"></u-icon>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="heart" title="摄影师实名认证"></u-cell-item>
				<u-cell-item icon="rmb-circle" title="订单"></u-cell-item>
				<u-cell-item icon="photo" title="相册"></u-cell-item>
				<u-cell-item icon="heart" title="关注"></u-cell-item>
				
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="warning" title="开发者调试" @click="clickTest"></u-cell-item>
			</u-cell-group>
		</view>
		
		<!--<test_cp></test_cp>以组件方式引入的支付框-->
	</view>
</template>

<script>
	import test_cp from "../../components/test_cp.vue";
	export default {
		components:{
				test_cp
		},
		data() {
			return {
				pic:'https://koiii.xyz/user/su.jpg',
				show:true
			}
		},
		onLoad() {
			
		},
		methods: {
			clickTest: function(e){//点击测试标签，跳转到测试页面
			   console.log('PayClicked');
			   uni.navigateTo({
			       url: '../test'
			   });
			},
			clicklogin: function(e){//点击登录标签，跳转到登录页面
			    console.log('LoginClicked');
			    uni.navigateTo({
			        url: './login/login'
			    });
			},
			clickOrder: function(e){
			    console.log('OrderClicked');
			    uni.navigateTo({
			        url: 'order/order'
			    });
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
