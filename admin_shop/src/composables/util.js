import { ElNotification, ElMessageBox } from "element-plus"
import NProgress from 'nprogress'
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
                confirmButtonText:'確定',
                cancelButtonText:'取消',
                type,
            }
    )
}

//顯示全屏loading
export function showFullLoading(){
    NProgress.start()
}
//隠蔵全屏loading
export function hideFullLoading(){
    NProgress.done()
}