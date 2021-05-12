
const Home = (state, dispatch) => {
  return (
    <div>
      <img src='/cache/logo.png'/>
      <a>© Onclick {state.footer.year}</a>
    </div>
  )
}

export default {
  view: Home,
  onroute: () => {}
}
