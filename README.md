
<div style="display: grid; grid: 1fr / 144px 1fr; gap: 36px; margin: 0 0 36px">
  <img src="logo.png">
  <div style="margin: auto 0">
    <div style="font: 36px/1 sans-serif;">pocket <sup style="font: 600 12px/1 sans-serif; color: #ed6981;">(beta)</sup></div>
    <span>A micro framework for pocket-sized apps.</span>
  </div>
</div>

## Introduction

Pocket is a minimal state manager and push state router mushed together with some sugar on top. Use it together with your favorite view library.

## Getting Started

Although not strictly nessecary, this framework was built with [Superfine](https://github.com/jorgebucaran/superfine) in mind.

```js
import { pocket } from 'pocket'
import { patch } from 'superfine'

const node = document.getElementById('app')
const app = init => pocket(init, view => patch(node, view))

const increment = state => ({ count: state.count++ })

const Home = {
  view: (state, dispatch) => {
    return (
      <div>
        <h1>Hello world!</h1>
        <button onclick={() => dispatch(increment)}>{count}</button>
      </div>
    )
  },
  onRoute: () => {
    console.log('Hello from the home page.')
  }
}

app({
  state: {
    count: 0
  },
  pages: {
    '/': Home
  }
})
```
