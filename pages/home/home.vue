<template>
	<scroll-view class="content">
		<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		
		<text class="content">{{message}}</text>
		
		<!-- 完整语法 -->
		<view v-on:click="doSomething">点击</view>	
		<!-- 缩写 -->
		<view @click="doSomething">点击</view>
		
		<view>
			<view v-html="rawHtml"></view>
		</view>
		
		<view>{{number + 1}}</view>
		<view>{{ok ? 'YES' : 'NO' }}</view>
		
		<view v-for="(item,index) in 10">
		<!-- 通过%运算符求余数，实现隔行换色的效果 -->
		<view :class="'list-' + index%2">{{index%2}}</view>
		</view>
		
		<view>
			<view v-if="seen">现在你看到我了</view>
			<view v-else>你看不到我了</view>
		</view>
		
		<view v-show="ok">Hello!</view>
		
		<view class="text_content" v-for="(item, index) in items" :key="index">
			{{ index }} - {{ item.message }}
		</view>
		
		<view v-for="(value, name, index) in object">
			{{ index }}. {{ name }}: {{ value }}
		</view>
		
		<uni-badge text="1"></uni-badge>
	</view>
	</scroll-view>
</template>

<script>
	// import uniBadge from '';
	export default {
		data() {
			return {
				// components:{ uniBadge },
				object: {
					title: 'How to do lists in Vue',
					author: 'Jane Doe',
					publishedAt: '2020-04-10'
				},
				items: [
					{ message: 'Foo' },
					{ message: 'Bar' }
				],
				seen: true,
				number:1,
				ok:true,
				title: 'Hello',
				message: "Hello Vue",
				rawHtml: '<div style="text-align:center;background-color: #007AFF;"><div >我是内容</div><img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png"/></div>',
			}
		},
		onLoad() {

		},
		methods: {
			doSomething:function() {
				console.log("doSomething");
				this.seen = !this.seen;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.text_content {
		font-size: 16rpx;
		color: black;
	}
</style>
