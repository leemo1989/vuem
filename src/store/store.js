import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    fullScreen: false,
    playlist: [],
    currentIndex: -1, //当前播放索引
    singer: {},
};
const getters = {
    //当前播放音乐信息
    cinfo(state){
        return state.singer
    }
};
const mutations ={
    cfull(state,s){
        state.fullScreen = s
    },
    cinfo(state,info) {
        state.singer = info.songinfo
        state.singer.file_link = info.bitrate.file_link
        state.singer.allTime = info.bitrate.file_duration
    },
    ilist(state,sid){
        state.playlist.push(sid)
        if(state.playlist.length == 1){
            state.fullScreen = true
        }else{
            state.fullScreen = false
        }
        state.currentIndex+=1
    }
};
const actions = {
    getsonginfo:(context)=>{
        const playurl = "/baidumusic/v1/restserver/ting?method=baidu.ting.song.play&songid="+state.playlist[state.currentIndex]
        axios.get(playurl)
            .then(res=>{
                console.log(res.data)
                context.commit('cinfo',res.data)
            }).catch(error=>{
                console.log(error)
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})