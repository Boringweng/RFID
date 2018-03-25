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
       <!-- <img src ="http://go.skyyer.com/wp-content/uploads/bfi_thumb/00-n5gj53q3ooi1vu6l2a4c89f4f4inoq2s91yxxiuol8.jpg"> -->
        <card class="inputdata">
                <h1 color="blue">CRSG登入</h1>
                <h2>學號</h2>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                <h2>密碼</h2>
                <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                <Button type="info" id="toleading">
                    <li>
                        <a v-link="{ path: '/Status'}">News</a>
                    </li>                
                 </Button>
                
             </card>
    </div>
</template>
<script>
    export default {
        toleading() {

        }
    }
</script>
