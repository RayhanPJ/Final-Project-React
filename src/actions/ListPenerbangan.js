import axios from "axios";

export const GET_LIST_PENERBANGAN = "GET_LIST_PENERBANGAN";
// export const GET_LIST_USER = "GET_LIST_UER";

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
      url: "https://gotravel-production.up.railway.app/api/v1/flight",
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

// export const getListUser = () => {
//   return (dispatch) => {
//     dispatch({
//       type: GET_LIST_USER,
//       payload: {
//         loading: true,
//         data: false,
//         errorMessage: false,
//       },
//     });

//     axios({
//       method: "GET",
//       url: "https://gotravel-production.up.railway.app/api/v1/profile",
//       timeout: 120000,
//     })
//       .then((response) => {
//         dispatch({
//           type: GET_LIST_PENERBANGAN,
//           payload: {
//             loading: false,
//             data: response.data,
//             errorMessage: false,
//           },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: GET_LIST_USER,
//           payload: {
//             loading: false,
//             data: false,
//             errorMessage: error.message,
//           },
//         });
//       });
//   };
// };
export const getListUser = async () => {
  const listUser = await axios.get(
    `https://gotravel-production.up.railway.app/api/v1/profile`
  )
  console.log({list: listUser})
}