
const Missing = (state, dispatch) => {
  return (
    <div class='missing'>
      <div>404 Not Found</div>
    </div>
  )
}

export default {
  view: Missing,
  onroute: () => {}
}
