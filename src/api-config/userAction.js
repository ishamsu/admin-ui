import axios from "axios";
export const getAllUsers = () => {
    return axios
      .get(`/adminui-problem/members.json`)
      .then((result) => { 
        console.log(`getAllEmails result-----------------`, result);
        return result
       })
      .catch((err) => {
        console.log(`getAllEmails error--------------------`, err);
        return false;
      });
  };