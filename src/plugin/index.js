import PageLoader from './pageLoader'

PageLoader.install = function (Vue) {
    Vue.component(PageLoader.name,PageLoader)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PageLoader)
}

export default PageLoader