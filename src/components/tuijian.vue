<template>
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
        <div style="clear:both"></div>
        <div style="padding:0;margin:0">
            <!--router-link tag="div" class="cardurl" :to="{name:'Musicplay',params:{songid:v.song_id}}" v-for="(v,index) in todayr.song_list" :key="index">
                <img :src="v.pic_big" :alt="v.title">
                <div>{{v.title}}</div>
            </router-link-->
            <div class="cardurl" v-for="(v,index) in todayr.song_list" :key="index" @click="playm(v.song_id)">
                <img :src="v.pic_big" :alt="v.title">
                <div>{{v.title}}</div>
            </div>
        </div>
        <div style="clear:both"></div>
        <div class="flex-container">
            <div class="flex-item " @click="ginfo(2)"><i class="fa fa-music fa-fw"></i> 热歌榜</div>
            <div class="flex-item " @click="ginfo(1)"><i class="fa fa-rss fa-fw"></i> 新歌榜</div>
            <div class="flex-item " @click="ginfo(24)"><i class="fa fa-reorder  fa-fw"></i> King榜</div>
        </div>
        <div v-for="n in showinfo" style="height: 90px;margin:10px 0;text-align: left">
          <div style="float:left;margin-right: 10px;">
            <img :src="n.pic_small" slot="icon">
          </div>
          <div style="height: 100%;float:left">
              <h5>{{n.author}}</h5>
              <p style="font-size: 12px;color:#7B7B7B">{{n.title}}</p>
          </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style type="text/css" >
    img{padding:0;margin:0}
    i{color:red}
    .cardurl {width:32%;
        margin-right:5px;
        overflow: hidden;
        float:left;
        overflow: hidden;
        height:170px;
        font-size:12px;
        }
    .cardurl img{
        width: 127px;
        height: 120px}
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