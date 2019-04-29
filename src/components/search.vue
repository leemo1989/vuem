<template>
    <div>
        <div>
          <el-input placeholder="请输入内容" v-model="input4" size="medium">
            <template slot="append"><el-button slot="append" icon="el-icon-search"></el-button></template>
          </el-input>
        </div>
        <div class="hot-key">
            <h4 class="title">热门搜索</h4>
            <mt-badge style="margin:5px;padding:10px" size="small" color="#888" v-for="(item, index) in hotkey" :key="index">{{item.k}}</mt-badge>

        </div>
    </div>
</template>

<script>
import {getData} from '@/api/singer'
export default {
    name:"Search",
    data() {
        return {
			hotkey:[]
        };
    },
	created(){
		this._gethotkey();
	},
	methods:{
		_gethotkey(){
            const url ='/qqmusic/splcloud/fcgi-bin/gethotkey.fcg'
            getData(url).then(data=>{
                console.log(data,555)
                this.hotkey=data.data.hotkey
            })
		}
	}
}
</script>
