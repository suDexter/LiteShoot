<template>
	<view>
			<view class="cu-list menu-avatar">
				<!--单项-->
				<view class="cu-item"  @click="gotochat" v-for="(res,index) in dataList" :key="res.id">
					<view class="cu-avatar round lg"><u-avatar :src="getheadUrl(res.id)" mode="circle"></u-avatar></view>
					<view class="content">
						<view class="text-grey">
							<view class="text-cut">{{ res.uname }}</view><!--名字-->
							<view class="cu-tag round bg-orange sm">{{res.utag}}</view><!--名后标签-->
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<!--定位与红点icon
								<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
								<text class="cuIcon-infofill text-red  margin-right-xs"></text>
								-->
								{{res.uinfo}}
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">{{res.utime}}</view><!--时间--> 
						<view class="cu-tag round bg-red sm">{{res.uredpots}}</view><!--右红点-->
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:{},
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
					this.$u.get('https://koiii.xyz/php/message_show.php', {
						
					}).then(res => {
						this.dataList = res;
					})
					console.log('DBoutall ok');
				},
				getheadUrl(id){
					return 'https://koiii.xyz/user/'+id+'/head.jpg'
				},
				gotochat(){
					uni.navigateTo({
					    url: './chat'
					});
				}
			}
		}
		</script>
		
		<style>
		
		</style>
