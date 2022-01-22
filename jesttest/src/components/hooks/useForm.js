import React from "react";
import { useState } from "react";

export const useForm = () => {
  const [data, setData] = useState(() => ({
    username: "",
    password: "",
  }));
  console.log("data:", data);

  return [
    data,
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
  ];
};
