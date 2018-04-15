<style scoped>
    .centerofy{
        float:left;
        top:calc(50% - 15px);
        margin-left:calc(50% - 45px);
    }
    .h1 {
    color: green;
}
</style>
<template>
    <div class="layout" >
        <Layout  :style="{minHeight: '100vh'}">
            <Sider>
                <br><br><br><br><br><br><br>
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
