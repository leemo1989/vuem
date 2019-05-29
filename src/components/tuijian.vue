<template>
    <div class="tuijian">
        <scroll ref="scroll" class="tuijiancontent">
            <div>
                <div style="height:160px">
                    <mt-swipe :auto="3000">
                      <mt-swipe-item v-for="i in lunbo">
                          <a :href="i.linkUrl">
                            <img :src="i.picUrl" height="100%" width="100%">
                          </a>
                      </mt-swipe-item>
                    </mt-swipe>
                </div>
                <h4 style="float:left"><i class="fa fa-calendar-check-o fa-fw"></i> 今日推荐</h4>
                <div style="display:flex;flex-wrap: wrap;justify-content: space-around;width:100%;">
                    <div class="cardurl" v-for="(v,index) in todayr.song_list" :key="index" @click="playm(v)">
                        <img :src="v.pic_big" :alt="v.title">
                        <div>{{v.title}}</div>
                    </div>
                </div>
                <div class="flex-container">
                    <div class="flex-item " @click="ginfo(2)"><i class="fa fa-music fa-fw"></i> 热歌榜</div>
                    <div class="flex-item " @click="ginfo(1)"><i class="fa fa-rss fa-fw"></i> 新歌榜</div>
                    <div class="flex-item " @click="ginfo(24)"><i class="fa fa-reorder  fa-fw"></i> King榜</div>
                </div>
                <div style="display: flex;flex-direction: column">
                    <div v-for="n in showinfo" style="height: 90px;margin:5px 0;text-align: left">
                      <div style="float:left;margin-right: 10px;">
                        <img :src="n.pic_small" slot="icon">
                      </div>
                      <div>
                          <h5>{{n.author}}</h5>
                          <p style="font-size: 12px;color:#7B7B7B;">{{n.title}}</p>
                      </div>
                    </div>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from '@/components/scroll'
export default {
    name:"Tuijian",
    data() {
        return {
            todayr:[],
            lunbo:[],
            selected:'1',
            showinfo:[],
            xinge:{},
            king:{},
        };
    },
    components:{
        Scroll
    },
    methods:{
        ginfo(id){
            //rege
            var regeurl = this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+id+"&size=10&offset=0"
            this.$axios.get(regeurl)
                .then(res=>{
                    console.log(res.data)
                    this.showinfo=res.data.song_list
                }).catch(error=>{
                    console.log(error)
            })
        },
        playm(sid){
            this.$store.dispatch('getsonginfo',sid)
            //this.$store.dispatch('ilist',sid)
        }
    },
    mounted(){
        this.ginfo(2)
        var url = this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0"
        this.$axios.get(url)
            .then(res=>{
                console.log(res.data)
                this.todayr=res.data
            }).catch(error=>{
                console.log(error)
        })
        //lunbo
        //var url = this.HOST +"/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=5"
        var url = this.HOST1 +"/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
        this.$axios.get(url)
            .then(res=>{
                console.log(res.data,666666)
                this.lunbo=res.data.data.slider
            }).catch(error=>{
                console.log(error)
        })
        this.$refs.scroll.refresh()
    }
}
</script>

<style type="text/css" >
    .tuijian{
      position: fixed;
      width: 100%;
      top: 88px;
      bottom: 0;
    }
    .tuijiancontent{
        height: 100%;
        overflow: hidden;
        padding:0 5px;
    }
    img{padding:0;margin:0}
    .cardurl {width:32%;
        height:170px;
        font-size:12px;
        padding-bottom:5px;
        flex:0;
        }
    .cardurl img{
        width: 120px;
        height: 120px;
        border-radius: 5px;
    }
    .flex-container{
                display:flex;
                height:50px;
            }
    .flex-item{
                width:30em;
                line-height: 38px;
                margin: 5px;
            }
</style>