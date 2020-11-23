import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Site/Home.vue'
import Products from '../views/Site/Products'
import ProductDetails from '../views/Site/ProductDetails'
import Negotiation from '../views/Site/Negotiation'
import Contact from '../views/Site/Contact'
import Refund from '../views/Site/Refund'
import About from '../views/Site/About'

import AdminLogin from '../views/Admin/Login'
import AdminOverview from '../views/Admin/Overview'
import AdminUsers from '../views/Admin/Users'
import AdminEscrow from '../views/Admin/Escrow'
import AdminTransaction from '../views/Admin/Transactions'
import AdminPushMessage from '../views/Admin/PushMessage'
import AdminRefundRequest from '../views/Admin/RefundRequest'
import AdminUserProfile from '../views/Admin/UserProfile'
import AdminEscrowView from '../views/Admin/EscrowView'
import AdminTransactionView from '../views/Admin/TransactionView'
import AdminRefundView from '../views/Admin/RefundView'


import UserOverview from '../views/Dashboard/Overview'
import UserEscrow from '../views/Dashboard/Escrow'
import UserTransaction from '../views/Dashboard/Transactions'
import UserWallet from '../views/Dashboard/Wallet'
import UserNotification from '../views/Dashboard/Notification'
import UserProfile from '../views/Dashboard/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse-products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product-details',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/negotiation',
    name: 'Negotiation',
    component: Negotiation
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/refund-request',
    name: 'Refund',
    component: Refund
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },


  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/overview',
    name: 'AdminOverview',
    component: AdminOverview
  },
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: AdminUsers
  },
  {
    path: '/admin/escrow',
    name: 'AdminEscrow',
    component: AdminEscrow
  },
  {
    path: '/admin/transactions',
    name: 'AdminTransaction',
    component: AdminTransaction
  },
  {
    path: '/admin/push-message',
    name: 'AdminPushMessage',
    component: AdminPushMessage
  },
  {
    path: '/admin/refund-requests',
    name: 'AdminRefundRequest',
    component: AdminRefundRequest
  },
  {
    path: '/admin/user-profile',
    name: 'AdminUserProfile',
    component: AdminUserProfile
  },
  {
    path: '/admin/escrow-view',
    name: 'AdminEscrowView',
    component: AdminEscrowView
  },
  {
    path: '/admin/transaction-view',
    name: 'AdminTransactionView',
    component: AdminTransactionView
  },
  {
    path: '/admin/refund-view',
    name: 'AdminRefundView',
    component: AdminRefundView
  },
  {
    path: '/user/overview',
    name: 'UserOverview',
    component: UserOverview
  },
  {
    path: '/user/escrow',
    name: 'UserEscrow',
    component: UserEscrow
  },
  {
    path: '/user/transactions',
    name: 'UserTransaction',
    component: UserTransaction
  },
  {
    path: '/user/wallet',
    name: 'UserWallet',
    component: UserWallet
  },
  {
    path: '/user/notifications',
    name: 'UserNotification',
    component: UserNotification
  },
  {
    path: '/user/profile',
    name: 'UserProfile',
    component: UserProfile
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
