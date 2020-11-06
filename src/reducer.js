const initialState = { status: 'loading', backlog: [], today: [], editor: [] };

export const DRAG_END = res => ({ type: 'DRAG_END', payload: res });
export const GOT_TASKS = res => ({ type: 'GOT_TASKS', payload: res });
export const TASK_ADDED = res => ({ type: 'TASK_ADDED', payload: res });
export const TASK_CHANGED = task => ({ type: 'TASK_CHANGED', payload: task });

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'DRAG_END':
      if (!action.payload.destination) {
        return state;
      }
      const { source, destination } = action.payload;
      const sourceClone = state[source.droppableId];
      const destClone = state[destination.droppableId];
      const [movingTask] = sourceClone.splice(source.index, 1);
      destClone.splice(destination.index, 0, movingTask);
      return {
        ...state,
        [source.droppableId]: sourceClone,
        [destination.droppableId]: destClone,
      };

    case 'GOT_TASKS':
      const { backlog, today } = action.payload;
      return { ...state, backlog, today };

    case 'TASK_ADDED':
      const task = action.payload;
      const newBacklog = state.backlog;
      newBacklog.unshift(task);
      return { ...state, backlog: newBacklog };

    case 'TASK_CHANGED':
      return { ...state, editor: [action.payload] };

    default:
      return state;
  }
};

export { initialState, reducer };
