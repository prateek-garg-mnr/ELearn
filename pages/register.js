import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name,
          email,
          password,
        }
      );
      toast("Registration Successful!! Please Login :)");
    } catch (e) {
      toast.error(e.response.data.message);
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="jumbotron bg-primary text-center square">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
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
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
