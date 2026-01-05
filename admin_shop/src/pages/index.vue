<template>
    <div>後台首頁<el-button @click="addcount">{{ count }}</el-button>
    <el-button type="primary" @click="addcount2">{{ form.count }}</el-button></div>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    let count = ref(1)

    function addcount(){
        console.log('add count')
        count.value++
    }

    const form = reactive({
        count:1
    })

    function addcount2(){
        form.count++
        console.log(form.count)
    }

</script>    