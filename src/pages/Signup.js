import http from "../http";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schema/signup";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmitHandler = (data) => {
    http
      .post("/api/v1/users", {
        ...data,
        avatar: "https://picsum.photos/800",
      })
      .then((res) => {
        if (res.status === 201) {
          alert("User successfully created with the id: " + res.data.id);
          navigate("/login");
        }
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={handleSubmit(onsubmitHandler)}>
            <div className="mb-3 mt-3">
              <label>Email:</label>
              <input
                {...register("email", {
                  required: "This field is required.. ",
                })}
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
              {errors.email ? (
                <div style={{ color: "red" }}>{errors.email.message}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label>Password:</label>
              <input
                {...register("password")}
                autoComplete="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
              {errors.password ? (
                <div style={{ color: "red" }}>{errors.password.message}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label>Name:</label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
              {errors.name ? (
                <div style={{ color: "red" }}>{errors.name.message}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label>Role:</label>
              <select
                {...register("role")}
                className="form-select"
                aria-label="Select role"
              >
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role ? (
                <div style={{ color: "red" }}>{errors.role.message}</div>
              ) : null}
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
