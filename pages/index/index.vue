<template>
	<view>
		<view class="wrap">
			<view class="wrapc" style="background-color: #FFFFFF">
				<u-swiper :list="swlist"></u-swiper><!--轮播图-->
			</view>
			<view class="u-tabs-box" style="font-family:PF"><!--滑动选框条-->
				<u-tabs-swiper activeColor="#000000" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" >
				<!--方框00-->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res.id">
								<!--顶部-->
								<view class="top" @click="senduid(res.id)">
									<view class="left">
										<u-avatar :src="getheadUrl(res.id)" mode="circle"></u-avatar><!--头像-->
										<view class="content" style="margin-left:10rpx">
											<view class="left">
												<view class="name">{{ res.uname }}</view><!--名字-->
												<u-rate :count="count" v-model="res.urate" :disabled="true" active-color="#ffaa00" gutter="3"></u-rate><!--评分-->
												<view class="rate">{{ res.urate }}</view><!--评分-->
											</view>
												<view class="left"><!--个人小标-->
													<u-icon name="level" color="#079999" size="28"></u-icon>
													<u-icon name="weibo-circle-fill" color="#ffaa00" size="28"></u-icon>
												</view>
											<view class="intro">{{ res.uintroduction }}</view><!--简介-->
										</view>
									</view>
									<view class="right">
										<view class="content">
											<view class="number">成交量{{ res.udeal }}</view>
										</view>
										<view class="content">
											<view class="number">{{ res.udistance }}m</view>
										</view>
									</view><!--距离-->
								</view>
								<!--中部-->
								<view class="middle">
									<view class="left">Ta的作品墙↓</view>
									<view class="right">获赞{{ res.uendorse }}</view>
								</view>
								<!--底部-->
								<view class="bottom">
									<view class="pic"><image :src="get01imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get02imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get03imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get04imgUrl(res.id)" mode="aspectFill"></image></view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<!--方框01-->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res.id">
								<!--顶部-->
								<view class="top" @click="senduid(res.id)">
									<view class="left">
										<u-avatar :src="getheadUrl(res.id)" mode="circle"></u-avatar><!--头像-->
										<view class="content" style="margin-left:10rpx">
											<view class="left">
												<view class="name">{{ res.uname }}</view><!--名字-->
												<u-rate :count="count" v-model="res.urate" :disabled="true" active-color="#ffaa00" gutter="3"></u-rate><!--评分-->
												<view class="rate">{{ res.urate }}</view><!--评分-->
											</view>
												<view class="left"><!--个人小标-->
													<u-icon name="level" color="#079999" size="28"></u-icon>
													<u-icon name="weibo-circle-fill" color="#ffaa00" size="28"></u-icon>
												</view>
											<view class="intro">{{ res.uintroduction }}</view><!--简介-->
										</view>
									</view>
									<view class="right">
										<view class="content">
											<view class="number">成交量{{ res.udeal }}</view>
										</view>
										<view class="content">
											<view class="number">{{ res.udistance }}m</view>
										</view>
									</view><!--距离-->
								</view>
								<!--中部-->
								<view class="middle">
									<view class="left">Ta的作品墙↓</view>
									<view class="right">获赞{{ res.uendorse }}</view>
									
								</view>
								<!--底部-->
								<view class="bottom">
									<view class="pic"><image :src="get01imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get02imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get03imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get04imgUrl(res.id)" mode="aspectFill"></image></view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item"><!--方框02-->
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res.id">
								<!--顶部-->
								<view class="top" @click="senduid(res.id)">
									<view class="left">
										<u-avatar :src="getheadUrl(res.id)" mode="circle"></u-avatar><!--头像-->
										<view class="content" style="margin-left:10rpx">
											<view class="left">
												<view class="name">{{ res.uname }}</view><!--名字-->
												<u-rate :count="count" v-model="res.urate" :disabled="true" active-color="#ffaa00" gutter="3"></u-rate><!--评分-->
												<view class="rate">{{ res.urate }}</view><!--评分-->
											</view>
												<view class="left"><!--个人小标-->
													<u-icon name="level" color="#079999" size="28"></u-icon>
													<u-icon name="weibo-circle-fill" color="#ffaa00" size="28"></u-icon>
												</view>
											<view class="intro">{{ res.uintroduction }}</view><!--简介-->
										</view>
									</view>
									<view class="right">
										<view class="content">
											<view class="number">成交量{{ res.udeal }}</view>
										</view>
										<view class="content">
											<view class="number">{{ res.udistance }}m</view>
										</view>
									</view><!--距离-->
								</view>
								<!--中部-->
								<view class="middle">
									<view class="left">Ta的作品墙↓</view>
									<view class="right">获赞{{ res.uendorse }}</view>
									
								</view>
								<!--底部-->
								<view class="bottom">
									<view class="pic"><image :src="get01imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get02imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get03imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get04imgUrl(res.id)" mode="aspectFill"></image></view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item"><!--方框03-->
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res.id">
								<!--顶部-->
								<view class="top" @click="senduid(res.id)">
									<view class="left">
										<u-avatar :src="getheadUrl(res.id)" mode="circle"></u-avatar><!--头像-->
										<view class="content" style="margin-left:10rpx">
											<view class="left">
												<view class="name">{{ res.uname }}</view><!--名字-->
												<u-rate :count="count" v-model="res.urate" :disabled="true" active-color="#ffaa00" gutter="3"></u-rate><!--评分-->
												<view class="rate">{{ res.urate }}</view><!--评分-->
											</view>
												<view class="left"><!--个人小标-->
													<u-icon name="level" color="#079999" size="28"></u-icon>
													<u-icon name="weibo-circle-fill" color="#ffaa00" size="28"></u-icon>
												</view>
											<view class="intro">{{ res.uintroduction }}</view><!--简介-->
										</view>
									</view>
									<view class="right">
										<view class="content">
											<view class="number">成交量{{ res.udeal }}</view>
										</view>
										<view class="content">
											<view class="number">{{ res.udistance }}m</view>
										</view>
									</view><!--距离-->
								</view>
								<!--中部-->
								<view class="middle">
									<view class="left">Ta的作品墙↓</view>
									<view class="right">获赞{{ res.uendorse }}</view>
									
								</view>
								<!--底部-->
								<view class="bottom">
									<view class="pic"><image :src="get01imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get02imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get03imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get04imgUrl(res.id)" mode="aspectFill"></image></view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item"><!--方框04-->
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res.id">
								<!--顶部-->
								<view class="top" @click="senduid(res.id)">
									<view class="left">
										<u-avatar :src="getheadUrl(res.id)" mode="circle"></u-avatar><!--头像-->
										<view class="content" style="margin-left:10rpx">
											<view class="left">
												<view class="name">{{ res.uname }}</view><!--名字-->
												<u-rate :count="count" v-model="res.urate" :disabled="true" active-color="#ffaa00" gutter="3"></u-rate><!--评分-->
												<view class="rate">{{ res.urate }}</view><!--评分-->
											</view>
												<view class="left"><!--个人小标-->
													<u-icon name="level" color="#079999" size="28"></u-icon>
													<u-icon name="weibo-circle-fill" color="#ffaa00" size="28"></u-icon>
												</view>
											<view class="intro">{{ res.uintroduction }}</view><!--简介-->
										</view>
									</view>
									<view class="right">
										<view class="content">
											<view class="number">成交量{{ res.udeal }}</view>
										</view>
										<view class="content">
											<view class="number">{{ res.udistance }}m</view>
										</view>
									</view><!--距离-->
								</view>
								<!--中部-->
								<view class="middle">
									<view class="left">Ta的作品墙↓</view>
									<view class="right">获赞{{ res.uendorse }}</view>
									
								</view>
								<!--底部-->
								<view class="bottom">
									<view class="pic"><image :src="get01imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get02imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get03imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get04imgUrl(res.id)" mode="aspectFill"></image></view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item"><!--方框05-->
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res.id">
								<!--顶部-->
								<view class="top" @click="senduid(res.id)">
									<view class="left">
										<u-avatar :src="getheadUrl(res.id)" mode="circle"></u-avatar><!--头像-->
										<view class="content" style="margin-left:10rpx">
											<view class="left">
												<view class="name">{{ res.uname }}</view><!--名字-->
												<u-rate :count="count" v-model="res.urate" :disabled="true" active-color="#ffaa00" gutter="3"></u-rate><!--评分-->
												<view class="rate">{{ res.urate }}</view><!--评分-->
											</view>
												<view class="left"><!--个人小标-->
													<u-icon name="level" color="#079999" size="28"></u-icon>
													<u-icon name="weibo-circle-fill" color="#ffaa00" size="28"></u-icon>
												</view>
											<view class="intro">{{ res.uintroduction }}</view><!--简介-->
										</view>
									</view>
									<view class="right">
										<view class="content">
											<view class="number">成交量{{ res.udeal }}</view>
										</view>
										<view class="content">
											<view class="number">{{ res.udistance }}m</view>
										</view>
									</view><!--距离-->
								</view>
								<!--中部-->
								<view class="middle">
									<view class="left">Ta的作品墙↓</view>
									<view class="right">获赞{{ res.uendorse }}</view>
									
								</view>
								<!--底部-->
								<view class="bottom">
									<view class="pic"><image :src="get01imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get02imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get03imgUrl(res.id)" mode="aspectFill"></image></view>
									<view class="pic"><image :src="get04imgUrl(res.id)" mode="aspectFill"></image></view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			keyword: '搜索',//搜索框事件
			count: 5,//星星总数
			swlist: [{
					image: 'https://koiii.xyz/ad/ad01.png',
				},
				{
					image: 'https://koiii.xyz/ad/ad02.png',
				},
				{
					image: 'https://koiii.xyz/ad/ad03.png',
				}
			],
			orderList: [[], [], [], [], [], []],//横选框数目
			dataList: {},
			list: [
				{
					name: '热门'
				},
				{
					name: '男生'
				},
				{
					name: '女生'
				},
				{
					name: '儿童',
				},
				{
					name: '情侣'
				},
				{
					name: '私房'
				}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
		};
	},
	onLoad() {
		this.DBoutall();
	},
	onShow() {
		
	},
	onPullDownRefresh(){
		setTimeout(function () {
			uni.stopPullDownRefresh();
		        }, 500);
	},
	methods: {
		// 页面数据
		getOrderList(idx) {
			let i = 0;
			for(i = 0; i < this.dataList.length; i++) {
				let index = this.$u.random(i, i);
				//console.log(index);
				let data = this.dataList[index];
				//console.log(data);
				this.orderList[idx].push(data);
			}
			this.loadStatus.splice(this.current,1,"loadmore")
		},
		DBoutall(){//个人信息全输出
			this.$u.get('https://koiii.xyz/php/index_show.php', {
				
			}).then(res => {
				this.dataList = res;
			})
			console.log('DBoutall ok');
		},
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		getheadUrl(id){
			return 'https://koiii.xyz/user/'+id+'/head.jpg'
		},
		get01imgUrl(id){
			return 'https://koiii.xyz/user/'+id+'/pic01.jpg'
		},
		get02imgUrl(id){
			return 'https://koiii.xyz/user/'+id+'/pic02.jpg'
		},
		get03imgUrl(id){
			return 'https://koiii.xyz/user/'+id+'/pic03.jpg'
		},
		get04imgUrl(id){
			return 'https://koiii.xyz/user/'+id+'/pic04.jpg'
		},
		senduid(id){
			uni.setStorageSync('uid',id);
			console.log('success');
			uni.navigateTo({
			    url: '../test01'
			});
		}
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
//方框
.order {
	background-color: #ffffff;
	padding: 20rpx;
	font-size: 28rpx;
	font-family:PF;
	//顶部
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.name{
				color: #282828;
				font-size: 30rpx;
				font-weight:600;
			}
			.rate{
				color: #ffaa00;
				font-size: 28rpx;
			}
			.intro{
				color: #7a7a7a;
				font-size: 26rpx;
			}
		}
		.right {
			color: #afafaf;
			font-size: 20rpx;
		}
	}
	//中部
	.middle{
		display: flex;
		justify-content: space-between;
		font-size: 35rpx;
		margin-top:10rpx;
		color: #2a2a2a;
		.left {
		}
		.right {
		}
	}
	//底部
	.bottom {
		display: flex;
		margin: 20rpx 0 0;
		.pic {
			margin-right: 20rpx;
			image {
				width: 160rpx;
				height: 160rpx;
				border-radius: 10rpx;
			}
		}
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
.wrapc {
	padding: 15rpx;
}
.icon {
  /* font-family需要和自定义的相同 */
   font-family: "iconfont" !important;
   ont-size: 40upx;
   font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
