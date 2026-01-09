<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>歡迎光臨</div>
                <div>請登入以進入後台管理系統</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h2 class="title">歡迎回來</h2>
            <div>
            <span class="light"></span>
            <span>帳號密碼登入</span>
            <span class="light"></span>
            </div>
            <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="請輸入帳號">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" show-password placeholder="請輸入密碼">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>    
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]"
                    type="primary" @click="onSubmit" :loading="loading">登入</el-button>
                </el-form-item>
            </el-form>
        </el-col>    
    </el-row>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { toast } from '~/composables/util.js'

//取得router實例
const router = useRouter()

//取得store實例
const store = useStore()

//定義form資料結構
const form = reactive({
    username: "",
    password: ""
})

const rules = {
    username: [
        { required: true, 
          message: '帳號不能為空', 
          trigger: 'blur' }
       ],
    password: [{ required: true, 
          message: '密碼不能為空', 
          trigger: 'blur' }
       ]
}
//取得form表單實例
const formRef = ref(null)
//加載狀態
const loading =ref(false)

const  onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        //請求之前啟動加載狀態
        loading.value = true

        store.dispatch("login", form).then(res =>{
            toast("登錄成功")
            router.push("/")
        }).finally(() =>{
            loading.value = false
        })
    })
}
//監聽回車方法事件
function onKeyUp(e){
    if (e.key == 'Enter'){
        onSubmit()
    }
}

//添加鍵盤監聽
onMounted(() => {
    document.addEventListener("keyup", onKeyUp)
})
//移除鍵盤監聽
onBeforeUnmount(() => {
    document.removeEventListener("keyup",onKeyUp)
})
</script>

<style scoped>
.login-container {
    @apply min-h-screen bg-indigo-500;
}
.login-container .left ,.login-container .right     {
    @apply flex items-center justify-center;
}
.login-container .right {
@apply bg-light-50  flex-col;
}
.left>div>div:first-child {
    @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child {
    @apply text-gray-200 text-sm;
}
.right .title {
    @apply font-bold text-3xl text-gray-800;
}
.right>div{
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
.right .light {
    @apply w-16 h-px bg-gray-200;
}
</style>