<template>
    <div class="music-list">
        <div :style="bgStyle(currenttop.topinfo.pic_album)">
            <div class="back">
                <i style="color:white;position: absolute;top:10px;left:6px;z-index:50;" class="fa fa-chevron-down fa-2x" @click="back"></i>
            </div>
            {{currenttop.topinfo.ListName}}
        </div>
        <scroll ref="scroll" class="sp">
            <ul style="text-align: left;font-size: 12px;background: #222;padding:20px;color:white">
                <li v-for="(v,index) in currenttop.songlist">

                    <div style="height:50px;width: 35px;float: left;"><h2>{{index+1}}</h2></div>
                    <div>
                        <h3>{{v.data.songname}}</h3>
                        <p style="color:rgba(255,255,255,0.3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{v.data.singer[0].name}}-{{v.data.albumname}}---songid-{{v.data.songid}}</p>
                    </div>
                </li>
            </ul>
        </scroll>
    </div>
</template>
<script>
import {getData} from '@/api/singer'
import Scroll from '@/components/scroll'
export default {
    name:'Rankdetail',
    data(){
        return {
            currenttop:[],
        }
    },
    created(){
        console.log(this.$store.state.currenttop)
        this.gettop();
    },
	components:{
		Scroll
	},
    methods:{
         bgStyle(bimg) {
             return `background: url(${bimg}) no-repeat;height:300px;background-size:cover;`
         },
        back(){
         this.$router.back() //回退到上一级路由
        },
        gettop(){
            const url ='/qqmusic/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&topid='+this.$store.state.currenttop.id+'&type=top&song_begin=0&song_num=30&g_tk=5381&format=json'
            getData(url).then(data=>{
                console.log(data,555)
                this.currenttop=data
            })
        }
    }
}
</script>
<style>
    .music-list{
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .sp{
        height:100%;
        overflow: hidden;
    }
</style>