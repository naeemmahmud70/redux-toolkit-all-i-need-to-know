import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setJsonUser } from "../../Redux/Slices/jsonApiUsersSlice";

const JsonAPIUsers = () => {
  const users = useSelector((state) => state.jsonUsers.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(setJsonUser(data)));
  }, []);

  return (
    <div className="mt-5 shadow rounded p-3">
      {users.map((user, index) => (
        <div key={user.id} className="d-flex mt-1">
          <h5 className="fw-bold">{index + 1}. </h5>
          <h5>
            This user is {user.name} and user's email is {user.email}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default JsonAPIUsers;
