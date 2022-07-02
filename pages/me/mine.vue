<template>
  <view class="content">
    <view class="weui-search-bar" @click="item">操作item选项卡样式</view>
    <view @click="CardPic">用户头像自定义组件</view>
    <avatar
      :imageSrc="imageSrc"
      :userName="userName"
      :phoneNumber="phoneNumber"
      @onAvatarItemClick="onAvatarItemClickCallBack"
    ></avatar>
    <view>状态管理</view>
  </view>
</template>
<script>
import avatar from "@/components/mine/mine_avatar_card.vue";
export default {
  components: {
    avatar,
  },
  data() {
    return {
      imageSrc: "/static/logo.png",
      iStatusBarHeight: 0,
      userName: "门泊东吴万里船🚢",
      phoneNumber: "12315",
    };
  },
  onLoad() {
    this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
    console.log("StatusBarHeight:" + this.iStatusBarHeight);
  },
  methods: {
    item: function () {
      uni.navigateTo({
        url: "mineitem",
      });
    },
    onAvatarItemClickCallBack: function () {
      this.userName = this.userName + " @CallBack";
    },
  },
};
</script>
<style></style>
