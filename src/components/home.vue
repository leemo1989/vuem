<template>
    <mt-navbar v-model="tselect" style="margin-bottom: 2px">
        <mt-tab-item id="1"><router-link to="#"><i class="fa fa-user-circle-o fa-lg"></i></router-link></mt-tab-item>
        <mt-tab-item id="2"><router-link to="/">首页</router-link></mt-tab-item>
        <mt-tab-item id="3"><router-link to="/geshou">歌手</router-link></mt-tab-item>
        <mt-tab-item id="4"><router-link to="/bangdan">推荐</router-link></mt-tab-item>
        <mt-tab-item id="5"><router-link to="/search">搜索</router-link></mt-tab-item>
    </mt-navbar>
</template>
<script>
export default {
    data(){
        return {
            tselect:'2'
        }

    }
}
</script>
<style type="text/css" scoped>
a{
    font-size:16px;color:#778899;}
</style>