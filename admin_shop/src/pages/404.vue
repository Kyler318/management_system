<template>
    <el-result
        icon="warning"
        title="404提示"
        sub-title="你找的頁面不存在！"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">回到首頁</el-button>
        </template>
      </el-result>
</template>
