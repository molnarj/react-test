export default function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload.delta
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload.delta
      }
    default:
      return state
  }
}
