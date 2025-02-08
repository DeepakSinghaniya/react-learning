import { useState } from "react";
import http from "../http";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const roleChangeHandler = (event) => {
    setRole(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    http
      .post("/api/v1/users", {
        email: email,
        name: name,
        password: password,
        role: role,
        avatar: "https://picsum.photos/800",
      })
      .then((res) => {
        if (res.status === 201) {
          alert("User successfully created with the id: " + res.data.id);
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={onsubmitHandler}>
            <div className="mb-3 mt-3">
              <label>Email:</label>
              <input
                onChange={emailChangeHandler}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password:</label>
              <input
                onChange={passwordChangeHandler}
                autoComplete="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <label>Name:</label>
              <input
                onChange={nameChangeHandler}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-3">
              <label>Role:</label>
              <select
                onChange={roleChangeHandler}
                className="form-select"
                aria-label="Select role"
              >
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
