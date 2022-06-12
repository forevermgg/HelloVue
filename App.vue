<script>
	// https://uniapp.dcloud.io/collocation/App.html#applifecycle
	export default {
		globalData: {
		    text: 'text'
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError:function(){
			console.log('App onError')
		},
		onPageNotFound:function(){
			console.log('App onPageNotFound')
		},
		onThemeChange:function(){
			console.log('App onThemeChange')
		}
	}
</script>
<style>
	/*每个页面公共css */
	@import './uni.scss';
</style>
