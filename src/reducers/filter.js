export default function filter(state = 'all' , action) {
  switch(action.type) {
    case 'CHANGE_FILTER':
      return action.payload;

    case 'persist/REHYDRATE':
      return action.payload.filterData || state ;
      
    default:
      return state;
  }
}