<style scoped>
    .layout{
        /* border: 1px solid #d7dde4; */
        /* background-color:rgb(20, 5, 231); */
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        }    
    .showmaber{
        height: 10vh;
        /* background-color: blue; */}
    .layout-footer-center{
        text-align: center;}

    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;}
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;}


</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <div class="showmaber">
                    <h1 style="color :white">名字顯示處</h1>
                    <router-link to ="Enter"><Button type="primary" size="small">登出</Button></router-link>
                </div>  
                    <router-link to ="Status"><MenuItem name="1">工具狀態</MenuItem></router-link>
                    <router-link to ="Report"><MenuItem name="2">借還記錄</MenuItem></router-link>
                    <router-link to ="Lending"><MenuItem name="3">外借系統</MenuItem></router-link>
                    <router-link to ="Tool"><MenuItem name="4">工具管理</MenuItem></router-link>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Content :style="{padding: '30px 30px 30px'}">
                <h1>工具管理</h1>
                <Card>
                    工具名稱
                    <Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
                    <Button type="primary" :loading="loading" icon="checkmark-round" @click="toLoading">
                            <span v-if="!loading">開始刷取條碼</span>
                            <span v-else>Loading...</span>
                    </Button>
                    <Button @click="success(false)">Success</Button>
                </Card>
                <Card>
                    <div style="height: 500px">
                    <Table height="200" :columns="columns1" :data="data2"></Table>
                    </div>
                </Card>
            </Content>
        </Layout>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title:'工具編號',
                        key: 'IID'
                    },
                    {
                        title: '工具名稱',
                        key: 'Iname'
                    },
                    {
                        title: '狀態',
                        key: 'status'
                    },         
                    {
                        title: '管理',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }            
                ],
                data2 :[
                    {
                        IID:'RFIDID',
                        Iname:'物品名字',
                        status:'在隊上或外借',
                        
                    }
                ],
                loading: false,  
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            success (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
        }            
    }
</script>
