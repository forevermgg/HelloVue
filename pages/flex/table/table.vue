<template>
	<view class="content">
	<view @click="goToTable0">
		goToTable0
	</view>
	<view @click="goToTable1">
		goToTable1
	</view>
	<view @click="goToTable2">
		goToTable2
	</view>
	<view @click="goToTable3">
		goToTable3
	</view>
	<view @click="goToTable4">
		goToTable4
	</view>
	</view>
</template>

<script>
export default {
	methods: {
		goToTable0: function () {
			uni.navigateTo({
				url:"tablenocss"
			})
		},
		goToTable1: function () {
			uni.navigateTo({
				url:"tableone"
			})
		},
		goToTable2: function () {
			uni.navigateTo({
				url:"tabletwo"
			})
		},
		goToTable3: function () {
			uni.navigateTo({
				url:"tablethree"
			})
		}
	}
}
</script>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
<style>
</style>