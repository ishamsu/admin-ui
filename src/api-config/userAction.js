import axios from "axios";
export const getAllUsers = () => {
    return axios
      .get(`/adminui-problem/members.json`)
      .then((result) => { 
        console.log(`getAllUsers result-----------------`, result);
        return result
       })
      .catch((err) => {
        console.log(`getAllUsers error--------------------`, err);
        return false;
      });
  };