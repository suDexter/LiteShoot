<template>
	<view>
		<text>没做完的个人页，id={{getuid()}}</text>
		<br>
		<image :src="get04imgUrl(getuid())"></image>
		<u-avatar :src="getheadUrl(getuid())" size="140" style="margin-top:15rpx;"></u-avatar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'https://koiii.xyz/user/su.jpg'
				}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods: {
			getuid(){
				return uni.getStorageSync('uid');
			},
			get04imgUrl(id){
				return 'https://koiii.xyz/user/'+id+'/pic04.jpg'
			},
			getheadUrl(id){
				return 'https://koiii.xyz/user/'+id+'/head.jpg'
			},
		}
	};
</script>

<style>
</style>
