<template>
    <div class="slist" v-show="dialogshow">
        tanchuang
    </div>
</template>

<script>
export default {
    name:"mlist",
    data() {
        return {
            dialogshow:false
        };
    },
    methods:{
        show () {
          this.dialogshow = true
        },
    }

}
</script>

<style type="text/css" scoped>
.slist{
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
}
</style>