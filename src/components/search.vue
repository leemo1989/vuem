<template>
    <div>
        <div>
            <input v-model="input4"
                   placeholder="搜索歌手或歌曲"
                   type="search"
                   style="width:90%;padding:5px;border:none;border-bottom: 1px solid #7B7B7B"></input>
            <button @click="searchinfo" style="padding:5px 12px;border-left:none;border-right: none"><i class="fa fa-search"></i></button>
        </div>
        <div v-show="!input4">
            <h4 class="title">热门搜索</h4>
            <mt-badge style="margin:5px;padding:10px" size="small" color="#888" v-for="(item, index) in hotkey" :key="index">{{item.k}}</mt-badge>
        </div>
        <div class="ss" v-show="input4">
            <scroll ref="scroll" class="tuijiancontent">
                <div>
                    <div>
                    <div v-for="v in sresult.list" @click="playm(v.songmid,v.albumid,v.albumname,v.songname)">
                        {{v.songname}}-{{v.albumname}}<br>{{slist(v.singer)}}
                        <hr>
                    </div>
                    </div>
                </div>
            </scroll>
        </div>
    </div>
</template>

<script>
import {getData} from '@/api/singer'
import Scroll from '@/components/scroll'
export default {
    name:"Search",
    data() {
        return {
            hotkey:[],
            input4:'',
            sresult:{},
            query:'',
        };
    },
	created(){
		this._gethotkey();
    },
	components:{
		Scroll
	},
	methods:{
        playm(sid,aid,aname,sname){
            console.log(sid)
            this.$store.dispatch('getsonginfo',{sid:sid,q:'yes',aid:aid,aname:aname,sname:sname})
        },

		_gethotkey(){
            const url ='/qqmusic/splcloud/fcgi-bin/gethotkey.fcg'
            getData(url).then(data=>{
                //console.log(data,555)
                this.hotkey=data.data.hotkey
            })
        },
        slist(singer){
            var z=[]
            for(let o of singer){
                //console.log(o.name)
                z.push(o.name)
            }
            return z.toString()
        },
        searchinfo(){
            if(this.input4){
                const url ='/qqmusic/soso/fcgi-bin/client_search_cp?aggr=1&format=json&cr=1&flag_qc=0&p=1&n=300&w='+this.input4
                getData(url).then(data=>{
                    //console.log(data)
                    this.sresult=data.data.song
                    console.log(this.sresult,6666)
                })
            }

        }
	}
}
</script>
<style>
    .ss{
        borer:1px solid blue;
        position: fixed;
        z-index: 100;
        top: 130px;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>
