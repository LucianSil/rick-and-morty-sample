import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { login } from "../store/authSlice"

const loginService = async (formData) => {
    return await axios.post("https://flag-2023.proxy.beeceptor.com/login", formData)
        .then((res) => {
            console.log(res)
            return res.data
        }).catch(err => {
            console.error(err)
        })
}

const Login = () => {
    const [formData, setFormData] = useState({ email: "teste", password: "" })

    const { token, name } = useSelector(state => state.root.auth)
    const dispatch = useDispatch()

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormData((prevValue) => {
            return { ...prevValue, [name]: value }
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const { user } = await loginService(formData)

        dispatch(login(user))

        console.log("onSubmit", user)
    }

    if (token) {
        return <p>Ola, {name}</p>
    }

    // controlled e uncontrolled inputs
    return (
        <div>
            <p>
                {JSON.stringify(formData)}</p>

            <form onSubmit={onSubmit}>
                <input type="email" name="email" required onChange={onChangeHandler} value={formData.email} />
                <input type="password" name="password" required onChange={onChangeHandler} value={formData.password} />
                <button>Submeter</button>
            </form>
        </div>
    )
}

export default Login