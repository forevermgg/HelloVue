<template>
	<view class="content">
	<view @click="goToBaseFlexbox">
		A Complete Guide to Flexbox
	</view>
	<view @click="goToBaseFlexboxTable">
		A Complete Guide to the Table Element
	</view>
	</view>
</template>

<script>
export default {
	methods: {
		goToBaseFlexbox: function () {
			console.log("goToBaseFlexbox");
			uni.navigateTo({
				url:"../flex/base/base"
			})
		},
		goToBaseFlexboxTable: function () {
			console.log("goToBaseFlexbox");
			uni.navigateTo({
				url:"../flex/table/table"
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
