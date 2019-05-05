<template>
    <div class="mlist">
        <div v-for="(v,index) in bd" :key="index" @click="selectItem(v)">
            <img width="100" height="100" :src="v.picUrl"/>
            <p v-for="z in v.songList">{{z.songname}}--{{z.singername}}</p>
        </div>
    </div>
</template>

<script>
    import {getData} from '@/api/singer'
    export default {
        name:"Bangdan",
        data() {
            return {
                bd:[],
            };
        },
        created(){
            this._getbd();
        },
        methods:{
            _getbd(){
                const url ='/qqmusic/v8/fcg-bin/fcg_myqq_toplist.fcg?format=json'
                getData(url).then(data=>{
                    console.log(data,555)
                    this.bd=data.data.topList
                })
            },
            selectItem(item){
                this.$router.push({
                    path: `/rankdetail/${item.id}`
                })
                this.$store.commit('ctop',item)
            },
        }
    }
</script>
<style type="text/css">
    .mlist {display: flex;flex-direction: column;text-align: left}
    .mlist img {width:110px;height: 110px;float: left;margin-right:10px;margin-bottom: 10px}
    .mlist p {font-size:11px}
</style>
