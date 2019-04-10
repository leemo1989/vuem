<template>
    <div class="player" v-show="playlist.length">
        <transition>
            <div v-show="fullScreen" class="normal-player">
                <div class="background">
                  <img width="100%" height="100%" :src="cinfo.pic_radio">
                </div>
                <div class="mtop">
                    <div class="back">
                        <i class="fa fa-chevron-down fa-2x" @click="back"></i>
                    </div>
                    <h3>{{cinfo.title}}</h3>
                    <h4>{{cinfo.author}}</h4>
                    <img :src="cinfo.pic_radio">
                </div>
                <div style="overflow: hidden;margin-bottom: 10px">{{clrc}}</div>
                    <div class="progress">
                        <span class="time time-l">{{format(currentTime)}}</span>
                        <div>=============================</div>
                        <span class="time time-l">{{format(cinfo.allTime)}}</span>
                    </div>
                <div class="scon">
                    <div class="scon1">
                        <i class="fa fa-random"></i>
                    </div>
                    <div class="scon1">
                        <i class="fa fa-step-backward"></i>
                    </div>
                    <div class="scon1">
                        <i class="fa fa-play" @click="togglePlaying"></i>
                    </div>
                    <div class="scon1">
                        <i class="fa fa-step-forward"></i>
                    </div>
                    <div class="scon1">
                        <i class="fa fa-heart-o"></i>
                    </div>
                </div>
                <audio controls :src="cinfo.file_link" ref="audio"
                       @play="ready" @timeupdate="updateTime"></audio>
            </div>
        </transition>
        <transition>
           <div class="mini-player" v-show="!fullScreen" @click="open">
				{{cinfo.title}}-{{cinfo.author}}
				<button>list</button>
           </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:"Musicplay",
    data(){
        return {
            songReady: false,
            currentTime: 0,
            allTime:0,
            playlist:this.$store.state.playlist,
            clrc:'',
        };
    },
    watch:{
     playing(newPlaying){
        const audio = this.$refs.audio
        this.$nextTick(() => { //确保DOM已存在
            newPlaying ? audio.play() : audio.pause()
        })
      }
    },
    methods:{

      ready() {
          console.log(888)
          this.songReady = false
      },
      //控制播放状态
      togglePlaying(){
          console.log(222)
          this.$refs.audio.play()
          if(!this.songReady){
              return
          }
      },
        format(interval){
          interval = interval | 0 //向下取整
          const minute = interval / 60 | 0
          const second = this._pad(interval % 60)
          return `${minute}:${second}`
        },
      _pad(num, n = 2){ //用0补位，补2位字符串长度
          let len = num.toString().length
          while(len < n){
            num = '0' + num
            len++
          }
          return num
      },
        open(){
			this.$store.commit('cfull',true)
        },
        error(){},
        end(){},
        back(){
            this.$store.commit('cfull',false)
        },
        updateTime(e) {
            this.currentTime = e.target.currentTime //时间戳
          console.log(e.target.currentTime) //时间戳
        },
    },
    computed:{
        fullScreen:function(){
            return this.$store.state.fullScreen
        },
        cinfo:function(){
            console.log(this.$store.dispatch('getsonginfo'),9999)
            return this.$store.getters.cinfo
        }
    }

}
</script>

<style type="text/css" scoped>
    .scon{
        display:flex;
        height:50px;
        align-items: center
    }
    .scon1{
        width:30em;
        border:1px solid blue
    }
    .scon1 i{

    }
.player{
}
    .mini-player{
      display: flex;
      align-items: center;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 180;
      width: 100%;
      height: 60px;
      background: red }
    .normal-player{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 150;
      background: cornflowerblue;
    }
    .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.6;
        filter: blur(20px);
    }
    .mtop{
        position: relative;
        margin-bottom: 25px;
    }
    .back{
        position: absolute;
        top:-5px;
        left:12px;
    }
    .progress{
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0px auto;
        padding: 10px 0

    }
</style>
