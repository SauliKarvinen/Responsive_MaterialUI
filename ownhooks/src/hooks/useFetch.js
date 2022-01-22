import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: false });
  useEffect(() => {
    setState({ ...state, loading: true });

    axios
      .get(url, {
        onDownloadProgress: (progressEvent) => {
          console.log(
            "Progress:",
            Math.round(progressEvent.loaded / progressEvent.total) * 100,
            "%"
          );
        },
      })
      .then((response) => response)
      .then((res) => {
        setState({ data: res.data, loading: false });
      });
  }, [url]);

  return state;
};

export default useFetch;
