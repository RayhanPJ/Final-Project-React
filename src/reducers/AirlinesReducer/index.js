import { GET_LIST_PENERBANGAN } from "../../actions/ListPenerbangan";

const initialState = {
  getListPenerbanganResult: false,
  getListPenerbanganLoading: false,
  getListPenerbanganError: false,
};

const Airlines = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PENERBANGAN:
      return {
        ...state,
        getListPenerbanganResult: action.payload.data,
        getListPenerbanganLoading: action.payload.loading,
        getListPenerbanganError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Airlines;