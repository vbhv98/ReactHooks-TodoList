export default function appReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: payload.text, completed: false }
      ];
    case "DELETE":
      return state.filter(todo => todo.id !== payload.id);
    case "UPDATE":
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    default:
      return state;
  }
}
