<template>
	<view>
		<view class="cu-card dynamic" :class="'no-card'">
			<view class="cu-item shadow" v-for="(res,index) in dataList" :key="res.id">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg"><u-avatar :src="getheadUrl(res.uid)" mode="circle"></u-avatar></view>
						<view class="content flex-sub">
							<view>{{res.uname}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{res.udate}}
							</view>
						</view>
					</view>
				</view>
				<view class="text-content" style="margin-top:18rpx;">
					{{res.utext}}
				</view>
				<!--未调整好的九宫格
				<view class="grid flex-sub padding-lr" :class="isCard?'col-3 grid-square':'col-1'">
					<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url(http://koiii.xyz/user/03/pic01.jpg);"
					 v-for="(item,index) in isCard?9:1" :key="index">
					</view>
				</view>
				-->
				<view  style="margin-left:25rpx;">
				<u-image width="700rpx" height="700rpx" :src="get01imgUrl(res.uid)"></u-image>
				</view>
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
					<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
					<text class="cuIcon-messagefill margin-lr-xs"></text> 30
				</view>
				<!--评论模块暂不开放
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
						<view class="content">
							<view class="text-grey">莫甘娜</view>
							<view class="text-gray text-content text-df">
								凯尔，你被自己的光芒变的盲目。
							</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>凯尔：</view>
									<view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-appreciatefill text-red"></text>
									<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
								</view>
							</view>
						</view>
					</view>

					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content">
							<view class="text-grey">凯尔</view>
							<view class="text-gray text-content text-df">
								妹妹，如果不是为了飞翔，我们要这翅膀有什么用?
							</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>莫甘娜：</view>
									<view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-appreciate text-gray"></text>
									<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
								</view>
							</view>
						</view>
					</view>
					评论模块暂不开放-->
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: true,
				dataList: {},
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
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
		onPullDownRefresh(){
			setTimeout(function () {
				uni.stopPullDownRefresh();
			        }, 500);
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
			// 页面数据
			getOrderList(idx) {
				let i = 0;
				for(i = 0; i < this.dataList.length; i++) {
					let index = this.$u.random(i, i);
					//console.log(index);
					let data = JSON.parse(JSON.stringify(this.dataList[index]));
					//console.log(data);
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				this.loadStatus.splice(this.current,1,"loadmore")
			},
			DBoutall(){//个人信息全输出
				this.$u.get('https://koiii.xyz/php/discover_show.php', {
					
				}).then(res => {
					this.dataList = res;
				})
				console.log('DBoutall ok');
			},
			getheadUrl(uid){
				return 'https://koiii.xyz/user/'+uid+'/head.jpg'
			},
			get01imgUrl(uid){
				return 'https://koiii.xyz/user/'+uid+'/pic01.jpg'
			}
		}
	}
</script>

<style>

</style>
