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
                    <Button type="primary" size="small">登出</Button>
                </div>  
                    <MenuItem name="1">工具狀態</MenuItem>
                    <MenuItem name="2">借還記錄</MenuItem>
                    <MenuItem name="3">外借系統</MenuItem>
                    <MenuItem name="4">工具管理</MenuItem>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Content :style="{padding: '30px 30px 30px'}">
                <h1>出借系統</h1>
                <Card>
                <Row>    
                    <Col span="10">
                    <div style="height: 500vh">
                        <h3>出借人</h3>
                        <Input v-model="LID" placeholder="" style="width: 300px"></Input>    
                        <h3>分機或電話</h3>
                        <Input v-model="phone" placeholder="" style="width: 300px"></Input>
                        <h3>出借時間</h3>
                        <Input v-model="time" placeholder="ex 2018/3/22 14:00" style="width: 300px"></Input>
                        <h3>出租地點</h3>
                        <Input v-model="location" placeholder="ex B219" style="width: 300px"></Input>
                        <h3>擔保人</h3>
                        <Input v-model="PID" placeholder="正副班長" clearable style="width: 200px"></Input>    
                        <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
                            <span v-if="!loading2">Click me!</span>
                            <span v-else>Loading...</span>
                        </Button>
                    </div>
                    </Col> 
                    <Col span="14">
                    <div style="height: 500vh">
                        <Table :columns="columns1" :data="data1"></Table>
                    </div>
                    </Col>
                </Row>    
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
                        title: '工具',
                        key: 'IID'
                    }
                ],
                LID: '',
                phone: '',
                time: '',
                location: '',
                PID:'',
                loading2: false
            }
        },
        methods: {
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
