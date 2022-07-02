<template>
  <view class="main">
    <view class="demo">
      <view class="constr"
        >和文字平起平坐的表格
        <view class="inline-table">
          <view>第一列</view>
          <view>第二列</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script></script>

<style>
.main {
  background: #beceeb;
  font-size: 14px;
}
.demo {
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}
.constr {
  padding: 40px 0;
}
.inline-table {
  flex: 1;
  display: inline-table;
  width: 128px;
  margin-left: 10px;
  border: 1px solid #cad5eb;
  flex-direction: row;
}
</style>
