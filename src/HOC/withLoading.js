import React, { useState } from "react";
import api from "../api/menu"
import Loader from "../Loader/Loader";

const withLoading = WrappedComponent => props => {
  const [show, setShow] = useState(false);

  api.interceptors.request.use(
    (config) => {
      setShow(true);
      return config;
    },
    (error) => {
      setShow(false);
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (config) => {
      setShow(false);
      return config;
    },
    (error) => {
      setShow(false);
      return Promise.reject(error);
    }
  );

  return (
    <div>
      <Loader show={show} />
      <WrappedComponent {...props} showContent={show} />
    </div>
  );
}

export default withLoading