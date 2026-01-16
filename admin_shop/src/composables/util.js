import { ElNotification,ElMessageBox } from "element-plus";

//消息提示
export function toast(message, type = 'success', dangerouslyUseHTMLString= false){
    ElNotification({
                message,
                type,
                duration: 3000
            })
}

export function showModal(content = "提示內容", type = "warning", title=""){
    return ElMessageBox.confirm(
            content,
            title,
            {
                cconfirmButtonText:'確定',
                cancelButtonText:'取消',
                type,
            }
        ).then(() => {
            ElMessage({
                type:'success',
                message:'退出成功',
            })
        })
}