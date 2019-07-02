<template>
    <div class="player" v-show="playlist.length">
        <transition>
            <div v-show="fullScreen" class="normal-player">
                <div class="background">
                  <img width="100%" height="100%" :src="cinfo.pic">
                </div>
                <div class="mtop">
                    <div class="back" @click="back"><i class="fa fa-chevron-left"></i></div>
                    <h3>{{cinfo.title}}</h3>
                    <h5>{{cinfo.author}}</h5>
                    <div class="cd">
                        <img :src="cinfo.pic">
                    </div>

                </div>
                <div style="overflow: hidden;margin-bottom: 50px">{{clrc}}</div>


                <audio controls :src="cinfo.file_link" ref="audio" autoplay
                       @play="ready" @timeupdate="updateTime" style="display:none">
                </audio>
                <div class="mbottom">
                    <div class="progress">
                        <span class="time time-l">{{format(currentTime)}}</span>
                        <div style="height: 1px;background: #e3e3e3;width: 100%;margin:0 8px;box-shadow: 0 5px 5px rgba(0,0,0,0.6);"
                             @touchstart.prevent="progressTouchStart"
                        >
                            <div :style="processbar">
                            </div>
                        </div>
                        <span class="time time-l">{{format(allTime)}}</span>
                    </div>
                    <div class="scon">
                        <div class="scon1">
                            <i class="fa fa-random"></i>
                        </div>
                        <div class="scon1">
                            <i class="fa fa-step-backward"></i>
                        </div>
                        <div class="scon1">
                            <div style="border-radius: 50%;margin:0 auto;width: 55px;height: 55px;line-height:55px;background: none;border:2px solid white">
                                <i :class="isplay?'fa fa-stop':'fa fa-play'" @click="togglePlaying"></i>
                            </div>
                        </div>
                        <div class="scon1">
                            <i class="fa fa-step-forward"></i>
                        </div>
                        <div class="scon1">
                            <i class="fa fa-heart-o"></i>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition>
           <div class="mini-player" v-show="!fullScreen" @click="open">
               <div class="icon" style="width:30%">
                   <img width="40" height="40" :src="cinfo.pic">
               </div>
               <div style="margin-left:10px;width:65%">
                   <font size="2px" color="#a9a9a9">{{cinfo.title}}</font>
                   <br>
                   <label><font color="#a9a9a9" size="2px" >{{cinfo.author}}</font></label>
               </div>
                <div style="margin-right:20px;text-align:center;border-radius: 50%;width: 25px;height:25px;line-height:25px;background: none;border:2px solid white">
                    <i style="color:white" :class="isplay?'fa fa-stop':'fa fa-play'" @click="togglePlaying"></i>
                </div>
               <div @click.stop="showlist" style="color:white;font-size:25px;">
                   <i class="fa fa-list-ol"></i>
               </div>
           </div>
        </transition>
                <div class="playlist" v-show="showFlag">
                    <div v-for="(v,index) in playlist" class="pitem">
                        {{index+1}}.    <font size="2px">{{v.title}}</font> - <font color="#888888" size="2px">{{v.author}}</font>
                        <button style="float:right;margin-right:20px;border: none;background: none;color:white">
                            <i class="fa fa-times fa-fw"></i>
                        </button>
                    </div>
                    <div style="text-align: center;position:absolute;bottom: 0;width: 100%;background: #1e1e1e" @click="showFlag=false">
                        <h3>关闭</h3>
                    </div>
                </div>
        <mlist ref="mlist"></mlist>
    </div>
</template>

<script>
    import mlist from '@/components/mlist'
export default {
    name:"Musicplay",
    data(){
        return {
            songReady: false,
            currentTime: 0,
            allTime:0,
            playlist:this.$store.state.playlist,
            clrc:'',
            showFlag:false,
            isplay:true,
            processbar:{
                height: '1px',
                background: '#ff1170',
                width:'',
                'text-align': 'right',
                position:'absolute',
                'box-shadow': '0 5px 5px rgba(0,0,0,0.6)'
            }
        };
    },
    components:{
        mlist
    },
    watch:{
     playing(newPlaying){
        const audio = this.$refs.audio
        this.$nextTick(() => { //确保DOM已存在
            newPlaying ? audio.play() : audio.pause()
        })
      },
    },
    created(){
        console.log('start--------------------')
    },
    methods:{
        progressTouchStart(event){
            console.log('event',event.touches[0].pageX)
        },
        showlist(){
            console.log(this.playlist,444)
            this.showFlag=true
            this.$refs.mlist.show()
        },
      ready() {
          console.log(888,this.$refs.audio.duration)
          this.songReady = false
          this.allTime=this.$refs.audio.duration
      },
      //控制播放状态
      togglePlaying(){
          console.log(222)
          this.isplay =!this.isplay
          if(this.isplay){
              this.$refs.audio.play()
          }else{
              this.$refs.audio.pause()
          }
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
            console.log('iopen,,,,,,,,,,,,,,,,,,')
			this.$store.commit('cfull',true)
        },
        error(){},
        end(){},
        back(){
            this.$store.commit('cfull',false)
        },
        updateTime(e) {
            this.currentTime = e.target.currentTime //时间戳
          //console.log(e.target.currentTime,this.currentTime/this.allTime*100) //时间戳
            this.processbar.width=this.currentTime/this.allTime*100+'%'
        },
    },
    computed:{
        fullScreen:function(){
            return this.$store.state.fullScreen
        },
        cinfo:function(){
            return this.$store.getters.cinfo
        }
    }

}
</script>

<style type="text/css" scoped>
    .scon{
        display:flex;
        height:50px;
        align-items: center;
        text-align: center;
    }
    .scon1{
        width:30em;

    }
    .scon1 i{
        color:white
    }
.player{

}
.mbottom{
    position: absolute;
    bottom: 50px;
    width: 100%;
}
.playlist{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    position: fixed;
    flex-direction: column;
      left: 0;
      bottom: 0;
      z-index: 200;
      width: 100%;
      height: 300px;
    overflow: hidden;
      background: #1e1e1e;
    color:#dedede;
}
.pitem{
    width: 100%;
    height: 30px;
    text-align: left;
    padding:15px;
}
    .mini-player{
        color: white;
      display: flex;
      align-items: center;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 180;
      width: 100%;
      height: 60px;
      background: black;
        box-shadow:2px 2px 5px #333333;
    }
    .normal-player{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 150;
      background: #222;
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
        margin-bottom: 35px;
        padding-top:10px;
    }
    .back{
        position: fixed;
        top:20px;
        left:20px;
        color:white;
    }
    .mtop h3,.mtop h5{
    width: 70%;
    margin: 0 auto;
    line-height: 20px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #f1f1f1;
    }
    .progress{
        display: flex;
        align-items: center;
        width: 80%;
        margin: 15px auto;
        padding: 10px 0;
        color: #7B7B7B;

    }
    .cd {
        width: 85%;
        height: 85%;
        margin: 0 auto;
        margin-top:80px;
        box-sizing: border-box;
        border: 10px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: lds-hourglass 25s linear infinite;
    }
    .cd img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
      .icon {
          margin-left:10px;
          border:none;
          overflow: hidden;
          flex: 0 0 40px;
          width: 40px;
          padding: 0 10px 0 20px img;
          border-radius: 50%;
          animation: lds-hourglass 10s linear infinite;
      }
@keyframes lds-hourglass {
	0% {
	transform:rotate(0);
    }
    100% {
        transform:rotate(360deg)
    }
}
</style>
