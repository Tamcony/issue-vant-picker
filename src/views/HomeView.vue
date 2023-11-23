<template>
  <!-- <HelloWorldView></HelloWorldView> -->
  <Picker
    :columns="columns"
    @scroll-into="onScroll"
    @change="onChange"
  ></Picker>
</template>

<script lang="ts" setup>
// import HelloWorldView from "@/views/HelloWorldView.vue"
import { Picker } from "vant"

const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
]

const onScroll = ({ columnIndex, currentOption }: {
  columnIndex: number,
  currentOption: {
    text: string,
    value: string
  }
}) => {
  console.log(columnIndex, currentOption)
  // 一个一个滑动的话，currentOption是当前选中的值。
  //通过惯性滚动的话，currentOption并不是当前选中的值。
}

const onChange = (value: string[]) => {
  console.log(value)
}


</script>

<style lang="less" scoped></style>
