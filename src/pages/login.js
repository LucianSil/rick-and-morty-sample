import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";

const loginService = async (data) => {
  return await axios
    .post("https://flag-2023.proxy.beeceptor.com/login", data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((er) => console.error(er));
};

const Login = () => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();
  const { token, name } = useSelector((state) => state.root.auth);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { user } = await loginService({
        email: form["email"].value,
        password: form["password"].value,
      });

      dispatch(login(user));
    },
    [dispatch, form]
  );

  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm((prevValue) => ({
      ...prevValue,
      [name]: { value, error: false },
    }));
  };

  if (token) {
    return <p>Ola, {name}</p>;
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={form?.email?.value ?? ""}
        name="email"
        required
        onChange={onChange}
      />
      <input
        type="password"
        value={form?.password?.value ?? ""}
        name="password"
        required
        onChange={onChange}
      />
      <button type="submit">Submeter</button>
    </form>
  );
};

export default Login;
