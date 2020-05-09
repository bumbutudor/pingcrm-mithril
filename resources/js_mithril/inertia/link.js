import m from 'mithril'
import {Inertia} from '@inertiajs/inertia'

export default {
  view: v => m('a', {
    class: v.attrs.class || '',
    href: v.attrs.route,
    onclick: e => {
      //e.stopPropagation()
      e.preventDefault()
      Inertia.visit(v.attrs.route, {
        data: {},
        method: v.attrs.method || 'get',
        replace: true,
        preserveScroll: false,
        preserveState: false,
      })
    }
  }, v.children)
}