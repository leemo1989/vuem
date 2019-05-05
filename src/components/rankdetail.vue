<template>
    <div class="music-list">

        <div style="height:250px;background:white">
            <button @click="back">返回</button>这里设置随机背景
        </div>
        <ul style="text-align: left;font-size: 12px;background: #222;padding:20px;color:white">
            <li v-for="(v,index) in currenttop">

                <div style="height:50px;width: 35px;float: left;"><h2>{{index+1}}</h2></div>
                <div>
                    <h3>{{v.data.songname}}</h3>
                    <p style="color:rgba(255,255,255,0.3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{v.data.singer[0].name}}-{{v.data.albumname}}---songid-{{v.data.songid}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {getData} from '@/api/singer'
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
    methods:{
        back(){
         this.$router.back() //回退到上一级路由
        },
        gettop(){
            const url ='/qqmusic/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&topid='+this.$store.state.currenttop.id+'&type=top&song_begin=0&song_num=30&g_tk=5381&format=json'
            getData(url).then(data=>{
                console.log(data,555)
                this.currenttop=data.songlist
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
        background: antiquewhite;
    }
</style>