import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const useCallApis = (navigate) => {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [isReset, setIsResset] = useState(null);

  function callapi(paramas, url) {
    setisloading(true);
    axios.post(`${process.env.BASE_URL_AUTH}auth/${url}`, paramas, {
      withCredentials: true,
    }).then((res) => {
        setisloading(false);
        setdata(res.data);
        // If url is 'signup', navigate to verification page
        if (url === 'verifiyToken' || url === 'signin') navigate.push('/');
      return Swal.fire({
            icon: 'success',
            text: res.massage,
        });
      }).catch((error) => {

      return  Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        });
        setisloading(false);
      });
  }

  function logout() {
    axios.get(`http://localhost:8000/auth/logout`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        navigate.push('/signup');
      })
      .catch((error) => console.log(error));
  }

  function ResetPassword(email) {
    axios.post(`http://localhost:8000/auth/ResetPassword`, { email: email }, {
      withCredentials: true,
    })
      .then((res) => {
        setIsResset(true);
      })
      .catch((error) => {
        console.log(error);
        setIsResset(false);
      });
  }

  function ResetPasswordTokenVerfiy(sendData) {
    axios.post(`http://localhost:8000/auth/ResetPasswordTokenVerfiy`, sendData, {
      withCredentials: true,
    })
      .then((res) => {
        setIsResset(true);
        navigate.push("/signin");
      })
      .catch((error) => {
        console.log(error);
        setIsResset(false);
      });
  }

  return { data, isloading, callapi, logout, isReset, ResetPassword, ResetPasswordTokenVerfiy };
}

export default useCallApis;
