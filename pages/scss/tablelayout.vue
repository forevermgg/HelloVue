<template>
  <view>
    <view>
      <uni-table border stripe emptyText="暂无更多数据">
        <uni-tr>
          <uni-th align="center">日期</uni-th>
          <uni-th align="center">姓名</uni-th>
          <uni-th align="center">地址</uni-th>
        </uni-tr>
        <uni-tr>
          <uni-td class="td">就1列就1列就1列就1列就1列</uni-td>
          <uni-td class="td"
            >当父级relative，且宽度很小的时候，例如{position:relative;
            width:20px;}，absolute元素也会出现一柱擎天的情况；</uni-td
          >
          <uni-td class="td"
            >当父级relative，且宽度很小的时候，例如{position:relative;
            width:20px;}，absolute元素也会出现一柱擎天的情况；</uni-td
          >
        </uni-tr>
      </uni-table>
    </view>
  </view>
</template>

<script></script>

<style>
.td {
  display: table-cell;
  vertical-align: inherit;
}
</style>
