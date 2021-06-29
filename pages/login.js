import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `/api/login`,
        {
          email,
          password,
        }
      );
      console.log("Login Response",data)
    } catch (e) {
      toast.error(e.response.data.message);
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="jumbotron bg-primary text-center square">Login</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter name"
          />
          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter name"
          />
          <button
            className="btn btn-block p-2 btn-primary"
            type="submit"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
