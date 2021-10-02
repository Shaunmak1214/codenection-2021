import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
type onUpdate = (err: object | null, res: object | null) => any;

axios.defaults.baseURL = API_URL;
const useAxios = (axiosParams: object, onUpdate: onUpdate) => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = (data: object | null) => {
    setLoading(true);
    axios
      .request({
        ...axiosParams,
        data: data ? data : null,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201 || res.status === 203) {
          onUpdate(null, res);
        } else {
          onUpdate(res, null);
        }
      })

      .catch((err) => {
        //check wat backend returns first
        onUpdate(err.response, null);
      })

      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, fetch: fetchData };
};

useAxios.propTypes = {
  axiosParams: PropTypes.object.isRequired,
  onUpdate: PropTypes.func,
};

export default useAxios;
