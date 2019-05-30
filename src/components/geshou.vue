<template>
  <div class="geshou">
    <scroll ref="scroll" class="tuijiancontent">
      <div>
        <ul class="content">
          <li v-for="(item,index) in data1" :key="index" @click="singerdetail">
              <h5>{{item.title}}</h5>
			  <ul class="bl">
				<li v-for="z in item.items" style="border-bottom:1px solid #f0f0f0;line-height:50px;margin:5px 0">
					<div>
                      <img :src="z.avatar" style="width:50px;height:50px;float:left;margin-right:20px">
                    </div>
					{{z.name}}
					<div style="clear:both"></div>
				</li>
			  </ul>
          </li>
        </ul>
        <div class="loading-wrapper"></div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from '@/components/scroll'
import {getData} from '@/api/singer'
	export default {
		name:'Geshou',
		data() {
		  return {
			data1: [],
			pulldown: true
		  }
		},
		components:{
			Scroll
		},
		created() {
		  this.loadData()
		},
		methods: {
			convinfo(mlist){
				let singerlist = {
					title:'hot',
					items:[]
				}
				mlist.forEach((item,index) =>{
					let key = item.Findex

					if (!singerlist[key]){
						singerlist[key] ={
							title:key,
							items:[]
						}
					}
					singerlist[key].items.push({
						name:item.Fsinger_name,
						id:item.Fsinger_mid,
						avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
					})
				})
              					console.log(singerlist)
				//sorted
				return singerlist
			},
			loadData() {
			  console.log(getData())
				const url ='/qqmusic/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&g_tk=1664029744&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp'
				getData(url).then(data=>{
					console.log(data,555)
					this.data1=this.convinfo(data.data.list)
				})
			},
			singerdetail(){
			  console.log(22)
			}
		}
  }
</script>
<style type="text/css">
    .geshou{
      position: fixed;
      width: 100%;
      top: 98px;
      bottom: 0;
	  background:#f7f7f7;
    }
	.bl{
		border-radius:5px;
		background:white;
		//box-shadow:2px 2px 5px #333333;
	}
</style>