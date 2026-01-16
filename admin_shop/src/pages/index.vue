<template>
    <div>後台首頁</div>

    {{ $store.state.user.username }}

    <el-button @click="buttonLogout">退出登錄</el-button>
</template>

<script setup>
import { showModal, toast } from '~/composables/util.js'
import { logout } from '~/api/manager.js'
import { useRouter } from 'vue-router'
import { useStore } from "vuex"

const router = useRouter()
const store = useStore()

    function buttonLogout(){
        showModal("是否要退出登錄").then(res=>{
            logout()
            .finally(() =>{
                store.dispatch('logout')
                //跳轉回登錄頁
                router.push('/')
                //提示退出成功
                toast('退出登錄成功')
            })
        })
    }
</script>    