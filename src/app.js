
import { pocket } from './pocket/index'
import { patch } from 'superfine'

import Home from './views/home'
import Missing from './views/missing'

const node = document.getElementById('app')
const app = init => pocket(init, view => patch(node, view))

const dispatch = app({
  state: {
    footer: {
      year: new Date().getFullYear()
    }
  },
  pages: {
    '/': Home,
    '/missing': Missing
  }
})

/**
 *
 * Subscriptions
 *
 */

// dispatch()

/**
 *
 * Third Party
 *
 */

// Google Tag Manager
window.dataLayer = window.dataLayer || []
window.dataLayer.push({
  'gtm.start': Date.now(),
  'event': 'gtm.js'
})
