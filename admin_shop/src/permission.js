import router from '~/router/index.js'
import { getToken } from '~/composables/auth.js'
import { toast, showFullLoading, hideFullLoading } from '~/composables/util.js'
import store from './store/index.js'    

//路由全域守衛
router.beforeEach( async (to, from, next) => {
    //顯示Loading
    showFullLoading()
    //判斷是否前往登入頁面
    console.log("進入路由守衛");

    const token = getToken();

//如果沒有token且不是前往登入頁面就強制導向登入頁面
    if(!token && to.path !== '/login'){
        toast("請先登入", "error")
        return next({path: '/login'})
    }
    //如果已經登錄則不能前往登入頁面
    if(token && to.path =='/login'){
        toast("請勿重覆登錄", "error")
        return next({path:from.path ? from.path : '/'})
    }
    //如果用戶已經登錄就自動獲取用戶信息,并存儲到token中
    if(token){
       await store.dispatch('getInfo')
    }

    next();
})

//全局後置守衛
router.afterEach((to, from) => hideFullLoading())