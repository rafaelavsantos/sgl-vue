export default {
    path: '/',
    component: () => import('../views/LoginView.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import('../components/form/FormLogin.vue'),
        },
        {
            path: '/create-user',
            name: 'create-user',
            component: () => import('../components/form/FormCreateUser.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('../components/form/FormForgotPassword.vue'),
        }
    ]
}
