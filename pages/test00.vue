<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="no-mode-here">
					请求结果为：
				</view>
				<view class="u-demo-result-line">
					{{JSON.stringify(result)}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">请求方式</view>
				<u-subsection vibrateShort :list="['get', 'post']" @change="getResult"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: {}
			}
		},
		onLoad() {
			this.getGet();
		},
		methods: {
			getGet() {
				this.$u.get('http://koiii.xyz/php/outall.php', {
					id: 2
				}).then(res => {
					this.result = res;
				})
			},
			getPost() {
				this.$u.post('/ebapi/public_api/index', {
					id: 1
				}).then(res => {
					this.result = res.banner;
				})
			},
			getResult(index) {
				index == 0 ? this.getGet() : this.getPost();
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	view,
	text {
		box-sizing: border-box;
	}
	/* #endif */
	
	/* start--演示页面使用的统一样式--start */
	.u-demo {
		padding: 25px 20px;
	}
	
	.u-demo-wrap {
		border-width: 1px;
		border-color: #ddd;
		border-style: dashed;
		background-color: rgb(250, 250, 250);
		padding: 20px 10px;
		border-radius: 3px;
	}
	
	.u-demo-area {
		text-align: center;
	}
	
	.u-no-demo-here {
		color: $u-tips-color;
		font-size: 13px;
	}
	
	.u-demo-result-line {
		border-width: 1px;
		border-color: #ddd;
		border-style: dashed;
		padding: 5px 20px;
		margin-top: 30px;
		border-radius: 5px;
		background-color: rgb(240, 240, 240);
		color: $u-content-color;
		font-size: 16px;
		/* #ifndef APP-NVUE */
		word-break: break-word;
		display: inline-block;
		/* #endif */
		text-align: left;
		
	}
	
	.u-demo-title,
	.u-config-title {
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	
	.u-config-item {
		margin-top: 25px;
	}
	
	.u-config-title {
		margin-top: 20px;
		padding-bottom: 5px;
	}
	
	.u-item-title {
		position: relative;
		font-size: 15px;
		padding-left: 8px;
		line-height: 1;
		margin-bottom: 11px;
	}
	
	.u-item-title:after {
		position: absolute;
		width: 4px;
		top: -1px;
		height: 16px;
		/* #ifndef APP-NVUE */
		content: '';
		/* #endif */
		left: 0;
		border-radius: 10px;
		background-color: $u-content-color;
	}
	/* end--演示页面使用的统一样式--end */
	
</style>
