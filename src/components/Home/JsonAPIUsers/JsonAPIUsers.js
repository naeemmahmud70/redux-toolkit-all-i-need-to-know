import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../Redux/Middleware/usersMiddleware";
import { Link } from "react-router-dom";

const JsonAPIUsers = () => {
  const users = useSelector((state) => state.jsonUsers.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="mt-5 shadow rounded p-3">
      <h2 className="my-4">
        Implemented Redux-thunk middleware for API  calling .
      </h2>
      {users.map((user, index) => (
        <Link
          style={{ color: "black", textDecoration: "none" }}
          key={user.id}
          to={`/user/${user.id}`}
        >
          <div className="d-flex mt-1 justify-content-between">
            <div className="d-flex mt-1">
              <h5 className="fw-bold">{index + 1}. </h5>
              <h5>This is {user.name}</h5>{" "}
            </div>
            <button className="btn btn-info fw-bold">Details</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JsonAPIUsers;
