//selectors
export const getAllTables = state => state.tables;
export const getTableById = ({tables}, id) => tables.find(table => table.id == id);

// actions name
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators //
export const updateTables = payload => ({type: UPDATE_TABLES, payload});

export const fetchTables = () => {
  return(dispatch) => {
    fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;
