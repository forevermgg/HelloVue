<template>
  <page-meta>
    <navigation-bar
      :title="nbTitle"
      :title-icon="titleIcon"
      :title-icon-radius="titleIconRadius"
      :subtitle-text="subtitleText"
      :subtitle-color="nbFrontColor"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
      :color-animation-duration="2000"
      color-animation-timing-func="easeIn"
    />
  </page-meta>
  <view class="content">
    <view @click="goToBaseFlexbox"> A Complete Guide to Flexbox </view>
    <view @click="goToBaseFlexboxTable">
      A Complete Guide to the Table Element
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      nbTitle: "标题",
      titleIcon: "/static/logo.png",
      titleIconRadius: "20px",
      subtitleText: "subtitleText",
      nbLoading: false,
      nbFrontColor: "#000000",
      nbBackgroundColor: "#e8e8e8",
    };
  },
  methods: {
    goToBaseFlexbox: function () {
      console.log("goToBaseFlexbox");
      uni.navigateTo({
        url: "../flex/base/base",
      });
    },
    goToBaseFlexboxTable: function () {
      console.log("goToBaseFlexbox");
      uni.navigateTo({
        url: "../flex/table/table",
      });
    },
  },
};
</script>
.content { display: flex; flex-direction: column; align-items: center;
justify-content: center; }
<style></style>
