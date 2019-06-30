<template>
    <cube-index-list :data="data1">
        <cube-index-list-group
        v-for="(group, index) in data1"
        :key="index"
        :group="group">
            <cube-index-list-item
              v-for="(item, index) in group.items"
              :key="index"
              :item="item"
              @select="selectItem">
              <div class="custom-item">
					<div>
                      <img :src="item.avatar" style="width:50px;height:50px;float:left;margin-right:20px">
                    </div>
					{{item.name}}
					<div style="clear:both"></div>
              </div>
            </cube-index-list-item>
        </cube-index-list-group>
    </cube-index-list>
</template>
<script>
import {getData} from '@/api/singer'
	export default {
		name:'Geshou',
		data() {
		  return {
			data1: [],
		  }
		},
		created() {
		  this.loadData()
		},
		methods: {
            selectItem(item) {
              console.log(item.name)
            },
            clickTitle(title) {
              console.log(title)
            },
            convinfo(mlist){
                let singerlist = {
                    //title:'hot',
                    //items:[]
                }
                mlist.forEach((item,index) =>{
                    let key = item.Findex

                    if (!singerlist[key]){
                        singerlist[key] ={
                            name:key,
                            items:[]
                        }
                    }
                    singerlist[key].items.push({
                        name:item.Fsinger_name,
                        id:item.Fsinger_mid,
                        avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                    })
                })
                //console.log(singerlist)
                let test=[]
                for(let x in singerlist){
                    test.push(singerlist[x])
                }
                console.log(test,666)
                //sorted
                return test
            },
            loadData() {
                const url ='/qqmusic/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&g_tk=1664029744&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp'
                getData(url).then(data=>{
                    //console.log(data,555)
                    this.data1=this.convinfo(data.data.list)
                    console.log(this.data1)
                })
            },
        }
  }
</script>
<style type="text/css">
    .custom-item{
        margin-bottom: 5px;line-height: 50px;
    }

</style>