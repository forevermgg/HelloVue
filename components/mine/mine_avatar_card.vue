<template>
  <view class="content">
    <uni-card>
      <view class="avatar_card" @click="setOnAvatarItemClick">
        <image :src="imageSrc" class="avatar"></image>
        <view class="avatar_card_text_container">
          <view class="avatar_card_text_name">{{ userName }}</view>
          <view class="avatar_card_text_phone">{{ phoneNumber }}</view>
        </view>
      </view>
    </uni-card>
  </view>
</template>
<script>
export default {
  data() {
    return {
      num: 3,
    };
  },
  props: ["imageSrc", "userName", "phoneNumber"], // 接收父组件传递的数据
  methods: {
    setOnAvatarItemClick() {
      this.$emit("onAvatarItemClick", this.num); // 向父组件传递信息
    },
  },
};
</script>

<style>
.avatar_card {
  flex: 1;
  height: 108rpx;
  display: flex;
  flex-direction: row;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
}
.avatar_card_text_container {
  flex: 1;
  flex-direction: column;
  height: 108rpx;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding-left: 16rpx;
  padding-right: 16rpx;
}
.avatar_card_text_name {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.avatar_card_text_phone {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
.avatar {
  width: 108rpx;
  height: 108rpx;
  border-radius: 54rpx;
  flex-shrink: 0;
}
</style>
