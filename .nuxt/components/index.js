export { default as Logo } from '../../components/Logo.vue'
export { default as Searchjokes } from '../../components/searchjokes.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazySearchjokes = import('../../components/searchjokes.vue' /* webpackChunkName: "components/searchjokes" */).then(c => c.default || c)
