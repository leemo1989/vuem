<template>
<transition>
    <div class="peri">
        <div class="back" @click="back"><i class="fa fa-chevron-left"></i></div>
        <div style="text-align: center;padding-top: 20px">
            <img src="@/assets/b0.jpg" style="height:90px;width:90px;border-radius: 50%;">
            <h2>Cuberto</h2>
        </div>
        <div class="flexitem">
            <div class="flex-item">
                <h2>249</h2>
                <h4>Following</h4>
            </div>
            <div class="flex-item">
                <h2>12K</h2>
                <h4>Fans</h4>
            </div>
            <div class="flex-item">
                <h2>596</h2>
                <h4>Likes</h4>
            </div>
        </div>
        <div class="flexitem">
            <div style="border-radius: 15px;background: #303537;padding:10px 60px;color: white" @click="test =!test">follow</div>
            <div style="border-radius: 15px;background: #1DB2B6;padding:10px 60px;color: white">chat</div>
        </div>

        <div style="padding-bottom: 10px">
        </div>

        <div style="height: 15px;background:#F3F5F7 ">

        </div>
        <div style="padding:0 20px">
            <div class="flexitem" style="justify-content: space-between !important;align-items:center">
                <div style="padding: 10px 0;">
                    <img src="@/assets/b0.jpg" style="height:50px;width:50px;border-radius: 50%;">
                </div>
                <div>
                    <div style="border-radius: 15px;background: #303537;padding:5px 15px;color: white">follow</div>
                </div>
            </div>
            <div>
                <img src="@/assets/t2.jpg" style="height:225px;width:100%;border-radius: 10px;">
            </div>
            <h3>Two people were there.</h3>
            <div class="flexitem" style="justify-content: space-between !important;">
                <div class="l1">Portrait</div>
                <div class="l1">Photography</div>
                <div class="l1">fresh</div>
                <div class="l1">lover</div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
    export default {
        name: "perinfo.vue",
        data(){
            return {
            }
        },
        methods:{
            back(){
                this.$router.back() //回退到上一级路由
            },
        }
    }
</script>

<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */

.v-enter,.v-leave-to {
    transform: translate3d(-50%, 0, 0);
    opacity: 0;
  }
.v-enter-active,.v-leave-active {
    transition: all 1.3s;
  }
    .back{
        position: fixed;
        top:20px;
        left:20px
    }
    .l1{
       border-radius: 15px;
        background: #F1F4F5;
        padding:5px 20px;
        color: #969899;
    }
    .flex-item{
        line-height: 10px;
        text-align: center;
    }
    .flexitem{
        display: flex;
        justify-content:space-around;
    }
.peri{
    position: fixed;
    top:0;
    width: 100%;
    height: 100%;
    background:white;
}
</style>