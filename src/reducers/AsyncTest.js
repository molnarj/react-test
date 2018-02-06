export default function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state
    case 'DECREMENT':
      return state
    default:
      return state
  }
}
