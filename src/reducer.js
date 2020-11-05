const initialState = { status: 'loading', backlog: [], today: [] };

export const DRAG_END = res => ({ type: 'DRAG_END', payload: res });
export const GOT_TASKS = res => ({ type: 'GOT_TASKS', payload: res });

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

    default:
      return state;
  }
};

// const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//     return result;
//   };

//   const move = (source, destination, droppableSource, droppableDestination) => {
//     const sourceClone = Array.from(source);
//     const destClone = Array.from(destination);
//     const [removed] = sourceClone.splice(droppableSource.index, 1);

//     destClone.splice(droppableDestination.index, 0, removed);

//     const result = {};
//     result[droppableSource.droppableId] = sourceClone;
//     result[droppableDestination.droppableId] = destClone;

//     return result;
//   };
//   onDragEnd = result => {
//     const { source, destination } = result;
//     if (!destination) {
//       console.log('No Destination on drag end');
//       return;
//     }

//     if (source.droppableId === destination.droppableId) {
//       const items = reorder(
//         (source.droppableId),
//         source.index,
//         destination.index
//       );

//       let state = { items };

//       if (source.droppableId === 'droppable2') {
//         state = { selected: items };
//       }

//       this.setState(state);
//     } else {
//       const result = move(
//         this.getList(source.droppableId),
//         this.getList(destination.droppableId),
//         source,
//         destination
//       );

//       this.setState({
//         items: result.droppable,
//         selected: result.droppable2,
//       });
//     }
//   };

export { initialState, reducer };
