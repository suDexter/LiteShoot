<template>
	<view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="打开数据库" @click="openDB"></u-cell-item>
				<view class="u-demo-result-line">
					{{JSON.stringify(result01)}}
				</view>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="插入数据" @click="DBadd"></u-cell-item>
				<view class="u-demo-result-line">
					{{JSON.stringify(result02)}}
				</view>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="删除数据" @click="DBdelete"></u-cell-item>
				<view class="u-demo-result-line">
					{{JSON.stringify(result03)}}
				</view>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="修改数据" @click="DBupdate"></u-cell-item>
				<view class="u-demo-result-line">
					{{JSON.stringify(result04)}}
				</view>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="查找数据" @click="DBfind"></u-cell-item>
				<view class="u-demo-result-line">
					{{JSON.stringify(result05)}}
				</view>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="全输出" @click="DBoutall"></u-cell-item>
				<view class="u-demo-result-line">
					{{(result06)}}
				</view>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result01: {},
				result02: {},
				result03: {},
				result04: {},
				result05: {},
				result06: {}
			}
		},
		onLoad() {
			
		},
		methods: {
			openDB: function(e){//打开数据库
				this.$u.get('http://koiii.xyz/php/public.php', {
					
				}).then(res => {
					this.result01 = res;
				})
				console.log('ok');
			},
			DBadd: function(e){//增
				this.$u.get('http://koiii.xyz/php/add.php', {
					uid: 4,
					uname:'cccc',
					ustr:'ffffcccc'
				}).then(res => {
					this.result02 = res;
				})
				console.log('ok');
			},
			DBdelete: function(e){//删
				this.$u.get('http://koiii.xyz/php/delete.php', {
					uid: 4
				}).then(res => {
					this.result03 = res;
				})
				console.log('ok');
			},
			DBupdate: function(e){//改
				this.$u.get('http://koiii.xyz/php/update.php', {
					uid: 4,
					uname:'cdc',
					ustr:'fffsdjhcc'
				}).then(res => {
					this.result04 = res;
				})
				console.log('ok');
			},
			DBfind: function(e){//查
				this.$u.get('http://koiii.xyz/php/find.php', {
					uid: 1,
				}).then(res => {
					this.result05 = res;
				})
				console.log('ok');
			},
			DBoutall: function(e){//全输出
				this.$u.get('http://koiii.xyz/php/index_show.php', {
					
				}).then(res => {
					this.result06 = res;
				})
				console.log('ok');
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
