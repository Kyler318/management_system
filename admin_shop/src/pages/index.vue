<template>
    <div>後台首頁</div>
    <el-button @click="setCookie">設置</el-button>
    <el-button @click="getCookie">讀取</el-button>
    <el-button @click="deleteCookie">刪除</el-button>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()
console.log(cookie)

function setCookie(){
    cookie.set('admin-token','123456',)
}

function getCookie(){
    console.log(cookie.get('admin-token'))
}

function deleteCookie(){
    cookie.remove('admin-token')
}
</script>    