const initialState = { status: 'loading', backlog: [], today: [] };

export const DRAG_END = res => ({ type: 'DRAG_END', payload: res });
export const GOT_TASKS = res => ({ type: 'GOT_TASKS', payload: res });
export const TASK_ADDED = res => ({ type: 'TASK_ADDED', payload: res });

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'DRAG_END':
      if (!action.payload.destination) {
        return state;
      }
      const { source, destination } = action.payload;
      const sourceClone =
        source.droppableId === 'backlog' ? state.backlog : state.today;
      const destClone =
        destination.droppableId === 'backlog' ? state.backlog : state.today;
      const [movingTask] = sourceClone.splice(source.index, 1);
      destClone.splice(destination.index, 0, movingTask);
      return { ...state, backlog: state.backlog, today: state.today };

    case 'GOT_TASKS':
      const { backlog, today } = action.payload;
      return { ...state, backlog, today };

    case 'TASK_ADDED':
      const task = action.payload;
      console.log('TASK_ADDED: ', task);
      const newBacklog = state.backlog;
      newBacklog.unshift(task);
      console.log('TASK_ADDED: ', newBacklog);
      return { ...state, backlog: newBacklog };

    default:
      return state;
  }
};

export { initialState, reducer };
