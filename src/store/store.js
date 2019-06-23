import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    fullScreen: false,
    playlist: [],
    currentIndex: -1, //当前播放索引
    singer: {},
    currenttop:{},
};
const getters = {
    //当前播放音乐信息
    cinfo(state){
        return state.singer
    },
};
const mutations ={
    cfull(state,s){
        state.fullScreen = s
    },
    cinfo(state,info) {
        //歌手，封面，audio链接,标题
        state.singer = info.songinfo
        state.singer.file_link = info.bitrate.file_link
        state.singer.allTime = info.bitrate.file_duration
    },
    playinfo(state,info){
        console.log('playinfo',info)
        state.singer=info
    },
    ilist(state,sid){
        state.playlist.push(sid)
        if(state.playlist.length == 1){
            state.fullScreen = true
        }else{
            state.fullScreen = false
        }
        state.currentIndex+=1
    },
    ctop(state,item){
        state.currenttop = item
    }
};
const actions = {
    getsonginfo:(context,sinfo)=>{
        console.log(sinfo)
        const sid= sinfo.sid
        //第一件事，把点击的歌曲加入到列表中，并重置当前歌曲索引
        context.commit('ilist',sid)
        //q存在就是指qq音乐接口，需要另外构造
        //第二，当前歌曲信息加入到信息当中
        if(sinfo.q == 'yes'){
            //token
            const url ="/qqmusic/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json&platform=yqq&cid=205361747&songmid="+sid+"&filename=C400"+sid+".m4a&guid=126548448"
            axios.get(url).then(data=>{
                console.log(data,777)
                //播放地址
                const purl="/ws/"+data.data.data.items[0].filename+"?fromtag=0&guid=126548448&vkey="+data.data.data.items[0].vkey
                const pic="http://imgcache.qq.com/music/photo/album_300/"+sinfo['aid']%100+"/300_albumpic_"+sinfo['aid']+"_0.jpg"
                console.log(purl,pic)
                context.commit('playinfo',{
                    author:sinfo['sname'],
                    title:sinfo['aname'],
                    pic:pic,
                    file_link:purl})

                //context.commit('cinfo',{songinfo:'wl',bitrate:{file_link:url,file_duration:1000}})
            })
        }else{
            console.log('not q')
            const playurl = "/baidumusic/v1/restserver/ting?method=baidu.ting.song.play&songid="+state.playlist[state.currentIndex].song_id
            axios.get(playurl)
                .then(res=>{
                    console.log(res.data)
                    //context.commit('cinfo',res.data)
                    context.commit('playinfo',{
                        author:res.data.songinfo.author,
                        title:res.data.songinfo.album_title,
                        pic:res.data.songinfo.pic_radio,
                        file_link:res.data.bitrate.file_link})
                }).catch(error=>{
                    console.log(error)
            })
        }


    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})