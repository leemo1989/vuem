<template>
    <div>
        <div class="header">
            <div class="item">
                <i class="fa fa-bars fa-1x text"></i>
            </div>
            <div class="item1">
                <h2 style="font-weight: 700;color:#f1f1f1;letter-spacing: 3px">SoloMusic</h2>
            </div>
            <div class="item">
                <router-link to="/search"><i class="fa fa-search fa-1x text"></i></router-link>

            </div>
        </div>
      <div class="tab">
        <router-link tag="div" class="tab-item" to="/tuijian">
          <span>推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/bangdan">
          <span>排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/geshou">
          <span>歌手</span>
        </router-link>
      </div>
    </div>
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
.text{
    font-size: 22px;
    color:#f1f1f1;
    padding:11px
}
.header {
    position: relative;
    height: 44px;
    color:white;
    text-align: center;
    background: #d44439;
    display: flex;
    align-items:center;
    padding:0 10px
}
.item1{
    flex-grow:1
}
    .tab{
  display: flex;
  line-height: 44px;
  height: 44px;
  width: 100%;
  background: #d44439;
    color:#f1f1f1;
        box-shadow:2px 2px 5px #333333;
    }
    .tab-item{
       flex: 1;
        text-align: center;
    }
    .router-link-active span{
        font-weight: bold;
        color: #f1f1f1;
        border-bottom: 2px solid white
    }
</style>