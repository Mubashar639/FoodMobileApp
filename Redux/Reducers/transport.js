import * as actionTypes from "../actionTypes";

const Transport = (
  state = {
    isLoading: false,
    errMess: null,
    user: null
  },
  action
) => {
  switch (action.type) {
    case actionTypes.transport_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        transports: action.transport
      };
    case actionTypes.transport_ADD: {
      const transport = action.transport;
      return {
        ...state,
        isLoading: false,
        errMess: null,
        transports: [...state.transports, transport]
      };
    }
    case actionTypes.transport_REMOVE: {
      const transports = state.transports.filter(
        (tranport, index) => tranport._id !== action.transport
      );
      return {
        ...state,
        isLoading: false,
        errMess: null,
        transports
      };
    }

    case actionTypes.transport_UPDATE:
      debugger;
      {
        const transports = state.transports.map((tranport, index) => {
          if (tranport._id === action.transport.id)
            return action.transport.updatedtransport;
          else return tranport;
        });
        return {
          ...state,
          isLoading: false,
          errMess: null,
          transports
        };
      }
    case actionTypes.transport_FILTER:
      let filtertransports = state.transports.filter(transport => {
        return (
          transport.name
            .toLowerCase()
            .indexOf(action.state.transport.toLowerCase()) !== -1 &&
          transport.facilities.filter(
            item =>
              item
                .toLowerCase()
                .indexOf(action.state.facility.toLowerCase()) !== -1
          )[0]
        );
      });
      console.log(state.transports);
      {
        return {
          ...state,
          isLoading: false,
          errMess: null,
          transports: filtertransports.length ? filtertransports:state.transports
        };
      }

    default:
      return state;
  }
};

export default Transport;
