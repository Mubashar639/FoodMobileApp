import {
  login_failed,
  login_loading,
  login_success
} from "../Actions/authentication";

// import { message } from "antd";
import axios from "axios";
import { baseUrl, verifyToken } from "../../shared";

const LoginActionCreater = creds => dispatch => {
  //       const {name,email,password,birth,gender}=creds

  //       fetch('https://localhost:5000/api/users/signup', {
  //         method: 'POST',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           password,
  //           birth,
  //           gender
  //         }),
  //       }).then((res)=>console.log(res)).catch(function(error) {
  // console.log('There has been a problem with your fetch operation: ' + error.message);
  //  // ADD THIS THROW error
  //   throw error;
  // });

  const { name, email, password, birth, gender } = creds;
  dispatch(login_loading());
  axios
    .post("http://localhost:5000/api/users/signup", {
      name,
      email,
      password,
      birth,
      gender
    },{
      headers:clea
    }
    )
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        // const user = verifyToken();
        console.log(res);
        // if (user) {
        //   dispatch(login_success(user));
        //   message.success("Hello "+ user.name );
        // } else {
        //   message.error(res.message);
        //   dispatch(login_failed("Some thing went wrong"));
        // console.log(res)
        // }
      }
    })
    .catch(err => {
      // message.error(err.message);
      dispatch(login_failed("Some thing went wrong"));
      console.log(err);
    });
};

export default LoginActionCreater;
