import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setObject } from "../../Redux/Slices/creatingObjectSlice";
import { setInObjectArray } from "../../Redux/Slices/creatingObjectArraySlice";

const CreatingObject = () => {
  const user = useSelector((state) => state.createdObject.user);
  const users = useSelector((state) => state.createdObjectArray.users);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setObject({ ...user, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    dispatch(setInObjectArray([...users, user]));
    const clearFormField = {
      name: "",
      email: "",
    };

    dispatch(setObject(clearFormField));
    e.preventDefault();
  };
  const handleRemove = (email) => {
    console.log(email);
    const newUsersList = users.filter((user) => user.email !== email);
    dispatch(setInObjectArray(newUsersList));
    console.log(newUsersList);
  };
  return (
    <div className="p-3 shadow rounded">
      <h4>Create Objects</h4>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            name="name"
            id=""
            value={user.name}
            className="form-control"
            placeholder="Enter your name"
            onChange={onChange}
          />
        </div>
        <div className="form-group pt-3">
          <input
            type="text"
            name="email"
            id=""
            value={user.email}
            className="form-control"
            placeholder="Enter your email"
            onChange={onChange}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary w-100 mt-3 fw-bold"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        {users.map((user, index) => (
          <div key={index + 1} className="d-flex align-items-center mt-3">
            <div className="d-flex pt-2">
              <p className="fw-bold">{index + 1}. </p>
              <p className="fw-bold">
                User name is {user.name} and email is {user.email}.
              </p>
            </div>
            <div>
              <button
                onClick={() => handleRemove(user.email)}
                className="btn btn-danger fw-bold mx-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatingObject;
