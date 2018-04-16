<style scoped>
    .centerofy{
        float:left;
        top:calc(50% - 15px);
     
    }
    .box{
        padding: '30px 30px 30px';
        background-image: url(https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.0-9/26055945_952923548217261_9075026729100799423_n.jpg?_nc_cat=0&oh=469f9b883186fbeeffa80e3c9a6dc6a5&oe=5B2B1EA8  );
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center center;
        background-size: cover;
        
    }
</style>
<template>
    <div class="layout" >
        <Layout  :style="{minHeight: '100vh'}">
            <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
                    <svg height="10vh" width="10vw">
                         <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                     </svg>
                    <Form class="centerofy" ref="formInline" :model="formLeft" label-poseition="left" :rules="ruleInline" >
                        <FormItem prop="user">
                            <h1 style="color :white">學號</h1>
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <h1 style="color :white">密碼</h1>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <!-- <Button type="primary" @click="handleSubmit('formInline')">Signin</Button> -->
                            <router-link to="Status"><Button >登入</Button></router-link>
                        </FormItem>
                        </Form>                   
                </Sider>
                <Content class="box">

                </Content>

        </Layout>    
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
