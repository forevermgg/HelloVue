<template>
  <view class="container">
    <view class="test_row">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
      <view>5</view>
    </view>

    <view class="test_row-reverse">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
      <view>5</view>
    </view>

    <view class="test_row_justify_content_center">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
      <view>5</view>
    </view>
    <view class="test_row_justify_content_center_space-around">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
      <view>5</view>
    </view>

    <view class="test_column">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
      <view>5</view>
    </view>

    <view class="test_column-reverse">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
      <view>5</view>
    </view>
  </view>
</template>

<script></script>

<style>
.container {
  flex: 1;
  display: flex; /* or inline-flex */
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.test_row {
  flex: 1;
  display: flex;
  width: 100%;
  background-color: antiquewhite;
  flex-direction: row;
}
.test_row_justify_content_center {
  flex: 1;
  display: flex;
  width: 100%;
  background-color: antiquewhite;
  flex-direction: row;
  justify-content: center;
}
.test_row_justify_content_center_space-around {
  flex: 1;
  display: flex;
  width: 100%;
  background-color: antiquewhite;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 3;
}
.test_row_item {
  background-color: plum;
}
.test_row-reverse {
  flex: 1;
  display: flex;
  width: 100%;
  background-color: antiquewhite;
  flex-direction: row-reverse;
}
.test_column {
  flex: 1;
  display: flex;
  background-color: antiquewhite;
  flex-direction: column;
}
.test_column-reverse {
  flex: 1;
  display: flex;
  background-color: antiquewhite;
  flex-direction: column-reverse;
}
</style>
