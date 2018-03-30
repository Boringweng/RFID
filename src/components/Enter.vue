<style scoped>
    .layout{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -999;
        }    
    .layout img {
                min-height: 100%;
                min-width: 1000px;
                width: 80%;
                /* //k */
        }
     
</style>
<template>
    <div class="layout" >
        <card class="inputdata">
                <h1 color="blue">CRSG登入</h1>
                <h2>學號</h2>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                <h2>密碼</h2>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                 <router-link to ="Status"><Button type="info" >登入</Button></router-link>
                
             </card>
    </div>
</template>
<script>
    export default {
        toleading() {

        }
    }
</script>
