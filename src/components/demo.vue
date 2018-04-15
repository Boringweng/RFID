<template>
<Form class="centerofy" ref="formInline" :model="formLeft" label-poseition="left" :rules="ruleInline" >
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
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
</template>
<script>
    export default {
        
    }
</script>
