import "~/assets/style/index.scss"

import DefaultLayout from "~/layouts/Default.vue"

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout)
}
