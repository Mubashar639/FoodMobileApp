import {
  facility_failed,
  facility_loading,
  facility_success,
  facility_add,
  facility_remove,
  facility_update
  // facility_create,
} from "../Actions/authentication";

// import { message } from "antd";
// import { axios } from "../../shared";
import axios from "axios";

export const GetFacilities = () => dispatch => {
  // dispatch(facility_loading());
  axios
    .get("http://10.0.2.2:8000/api/facility")
    .then(res => {
      // console.log("Before", res);

      if (res.status === 200) {
        dispatch(facility_success(res.data.data.facilitys));
        // message.success("success");
        // console.log(res);
      }
    })
    .catch(err => {
      // message.error(err.message);
      dispatch(facility_failed("Some thing went wrong"));
      // console.log(err);
    });
};

export const CreateFacilities = creds => dispatch => {
  // const {email,password}=creds
  // dispatch(login_loading());
  const token = localStorage.getItem("token");

  axios
    .post(
      "api/facility",
      {
        ...creds
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(res => {
      if (res.status === 201) {
        console.log(res.data);
        dispatch(facility_add(res.data.data.facility));
        // message.success("facility added");
      } else {
        // message.error(res.message);
        // console.log(res)
      }
    })
    .catch(err => {
      // message.error(err.message);
      // dispatch(login_failed("Some thing went wrong"));
      console.log(err);
    });
};

export const DeleteFacilities = creds => dispatch => {
  // const {email,password}=creds
  // dispatch(login_loading());
  const token = localStorage.getItem("token");
  axios
    .delete("api/facility/" + creds, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      if (res.status === 204) {
        dispatch(facility_remove(creds));
        console.log(res.data);
        // message.success("successfully Deleted");
      }
    })
    .catch(err => {
      // message.error(err.message);
      console.log(err);
    });
};

export const UpdateFacilities = ({ id, ...creds }) => dispatch => {
  // const {email,password}=creds
  // dispatch(login_loading());
  const token = localStorage.getItem("token");
  axios
    .patch(
      "api/facility/" + id,
      { ...creds },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(res => {
      if (res.status === 200) {
        dispatch(facility_update({ id, updatedfacility: res.data.facility }));
        // message.success("successfully updated");
      }
    })
    .catch(err => {
      // message.error(err.message);
      console.log(err);
    });
};
