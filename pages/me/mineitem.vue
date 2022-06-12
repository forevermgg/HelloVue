<template>
	<view class="content">
		<view>item 2:1</view>
		<view class="ItemView_container">
			<view id="item_left" class="item_left">AAA</view>
			<view id="item_right" class="item_right">BBB</view>
		</view>
		<view>item 1:1</view>
		<view class="ItemView_container">
			<view id="item_left_1" class="item_left_1">AAA</view>
			<view id="item_right_1" class="item_right_1">BBB</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				iStatusBarHeight: 0,
			};
		},
		onLoad() {
			this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			console.log("StatusBarHeight:" + this.iStatusBarHeight);
		},
	};
</script>
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.toTop {
		bottom: calc(var(--window-bottom) + 10px);
	}
	.ItemView_container {
		flex: 1;
		height: 65rpx;
		display: flex; /* or inline-flex */
		flex-direction: row;
		padding-left: 16rpx;
		padding-right: 16rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		border-top: 0.5rpx solid #999;
		border-bottom: 0.5rpx solid #999;
	}
	#item_left.item_left {
		flex: 1;
		height: auto;
		display: flex; /* or inline-flex */
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		flex-basis: auto;
		flex-grow: 2;
	}
	#item_right.item_right {
		flex: 1;
		height: auto;
		display: flex; /* or inline-flex */
		justify-content: flex-end;
		align-items: center;
		align-content: center;
		flex-basis: auto;
		flex-grow: 1;
	}
	#item_left_1.item_left_1 {
		flex: 1;
		height: auto;
		display: flex; /* or inline-flex */
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		flex-basis: auto;
		flex-grow: 1;
	}
	#item_right_1.item_right_1 {
		flex: 1;
		height: auto;
		display: flex; /* or inline-flex */
		justify-content: flex-end;
		align-items: center;
		align-content: center;
		flex-basis: auto;
		flex-grow: 1;
	}
</style>