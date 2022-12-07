import axios from "axios";

export const GET_LIST_PENERBANGAN = "GET_LIST_PENERBANGAN";

export const getListPenerbangan = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_PENERBANGAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "https://gotravel-production.up.railway.app/api/v1/airport",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_PENERBANGAN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_PENERBANGAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
