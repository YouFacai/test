export default function routerBeforeEach(router) {
    // eslint-disable-next-line no-unused-vars
    router.beforeEach((to, _, next) => {
        // 路由的权限
        let routerAuthority = to.meta.authority
        // 我当前用户的权限
        let myAuthority = localStorage.getItem("authority")

        console.log(routerAuthority,myAuthority)
        if (routerAuthority.includes(myAuthority)) {
            next();
        } else {
            next("/404");
        }
    })
}