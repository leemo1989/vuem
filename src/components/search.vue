<template>
    <div>
        chazzhao--{{hotkey}}
    </div>
</template>

<script>
import {gethotkey} from '@/api/search.js'
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
			console.log(444444444,gethotkey())
			this.hotkey = gethotkey()
		}
	}
}
</script>
