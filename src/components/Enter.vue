<style scoped>
    .centerofy{
        float: center;
        top:calc(100% -20px);
    }
    
    .box{
        padding: '30px 30px 30px';
        background-image: url(https://tw-gw.com/wp-content/uploads/2017/09/%E6%B7%A1%E6%B1%9F%E5%A4%A7%E5%AD%B8%E5%85%A5%E5%8F%A3%E6%A4%8D%E7%94%9F%E7%89%86-OK150dpi.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size:100% 100%;
    }
</style>
<template>
    <div class="layout" >
        <Layout  :style="{minHeight: '100vh'}">
            <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'hidden'}">
                       
                <svg height="20vh" width="15vw">
                   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" transform="translate(35,10)"/>
                </svg>
              
                    <Form class="centerofy" ref="formInline" :model="formLeft" label-poseition="left" :rules="ruleInline" >
                
                        <FormItem prop="user">
                            <h1 :style="{color :'white',position: 'inherit',left:'60px'}">學號</h1>
                            <Input type="text" v-model="formInline.user" placeholder="Username" :style="{width:'80%',position: 'inherit',left:'15px'}">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <h1 :style="{color :'white',position: 'inherit',left:'60px'}">密碼</h1>
                            <Input type="password" v-model="formInline.password" placeholder="Password":style="{width:'80%',position: 'inherit',left:'15px'}">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <!-- <Button type="primary" @click="handleSubmit('formInline')">Signin</Button> -->
                            <router-link to="Status"><Button :style="{position: 'absolute',left:'60px'}">登入</Button></router-link>
                        </FormItem>
                        </Form>                   
            </Sider>
            <Content class="box"></Content>

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
