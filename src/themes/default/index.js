import Home from './pages/Home.vue'
import Category from './pages/Category.vue'
import Product from './pages/Product.vue'
import Static from './pages/Static.vue'
import Checkout from './pages/Checkout.vue'
import UIStore from './store/ui-store'

const routes = [
    { path: '/', component: Home, alias: '/pwa.html' },
    { name: 'checkout', path: '/checkout', component: Checkout },
    { name: 'category', path: '/c/:slug', component: Category },
    { name: 'product', path: '/p/:id/:slug', component: Product },
    { name: 'legal', path: '/legal', component: Static, props: {page: 'lorem', title: 'Legal Notice'}, meta: {title: 'Legal Notice', description: 'Legal Notice - example of description usage'} },
    { name: 'privacy', path: '/privacy', component: Static, props: {page: 'lorem', title: 'Privacy'} },
    { name: 'magazine', path: '/magazine', component: Static, props: {page: 'lorem', title: 'Magazine'} },
    { name: 'sale', path: '/sale', component: Static, props: {page: 'lorem', title: 'Sale'} },
    { name: 'order-tracking', path: '/order-tracking', component: Static, props: {page: 'lorem', title: 'Track my Order'} },
    { name: 'my-account', path: '/my-account', component: Static, props: {page: 'lorem', title: 'My Account'} },
    { name: 'my-orders', path: '/my-orders', component: Static, props: {page: 'lorem', title: 'My Orders'} },
    { name: 'about-us', path: '/about-us', component: Static, props: {page: 'about', title: 'About us'} },
    { name: 'customer-service', path: '/customer-service', component: Static, props: {page: 'lorem', title: 'Customer service'} },
    { name: 'store-locator', path: '/store-locator', component: Static, props: {page: 'lorem', title: 'Store locator'} },
    { name: 'size-guide', path: '/size-guide', component: Static, props: {page: 'lorem', title: 'Size guide'} },
    { name: 'gift-card', path: '/gift-card', component: Static, props: {page: 'lorem', title: 'Gift card'} },
    { name: 'delivery', path: '/delivery', component: Static, props: {page: 'lorem', title: 'Delivery'} },
    { name: 'returns', path: '/returns', component: Static, props: {page: 'lorem', title: 'Returns policy'} },
    { name: 'order-from-catalog', path: '/order-from-catalog', component: Static, props: {page: 'lorem', title: 'Order from catalog'} },
    { name: 'contact', path: '/contact', component: Static, props: {page: 'contact', title: 'Contact'} }
]

export default function (app, router, store) {
  router.addRoutes(routes)
  store.registerModule('ui', UIStore)
  return
}
