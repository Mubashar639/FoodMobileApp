import {
    // transport_failed,
    
  
    get_category
    // transport_create,
  
  } from "../Actions/authentication";
  import { baseUrl } from "../../shared";

export const GetCategories = () => dispatch => {
  
    baseUrl
      .get('api/catagory')
      .then(res => {
        if (res.status === 200) {

          dispatch(get_category(res.data.categories));
        //   message.success("success");
          // console.log(res.data)
        }
      })
      .catch((err) => {
        // message.error(err.message);
        // dispatch(transport_failed("Some thing went wrong"));
        console.log(err)
      });
  };