//selectors
export const getAllStatuses = ({ statuses }) => statuses;

// actions name
const createActionName = actionName => `app/tables/${actionName}`;

// action creators //

const statusesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
      return statePart;
  }
};

export default statusesReducer;
