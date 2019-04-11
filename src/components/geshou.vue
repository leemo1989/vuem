<template>
  <scroll class="wrapper"
          :data="data1"
          :pulldown="pulldown"
          @pulldown="loadData">
    <ul class="content">
      <li v-for="(item,index) in data1" :key="index" style="border:1px solid red" @click="singerdetail">
          <h5>{{item.Fsinger_name}}</h5>
      </li>
    </ul>
    <div class="loading-wrapper"></div>
  </scroll>
</template>
<script>
import scroll from '@/components/scroll.vue'
import {getData} from '@/api/singer'
  export default {
      name:'Geshou',
      components:{
          scroll
      },
    data() {
      return {
        data1: [],
        pulldown: true
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      loadData() {
          console.log(getData())
            const url ='/qqmusic/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp'
            getData(url).then(data=>{
                console.log(data,555)
                this.data1=data.data.list
            })
      },
        singerdetail(){
          console.log(22)
        }
    }
  }
</script>