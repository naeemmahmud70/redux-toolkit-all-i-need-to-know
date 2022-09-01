import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../Redux/Middleware/usersMiddleware";

const UserDetails = () => {
  const { id } = useParams();
  const { user, loader } = useSelector((state) => state.jsonUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);
  return (
    <div className="mt-3 p-3 shadow rounded">
      <h2 className="my-4">Dynamic user details:</h2>
      {loader ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h5>
            <span className="fw-bold">Name:</span> {user.name}
          </h5>
          <h5>
            <span className="fw-bold">Phone:</span> {user.phone}
          </h5>
          <h5>
            <span className="fw-bold">Email:</span> {user.email}
          </h5>

          <h5>
            <span className="fw-bold">Website:</span>
            <Link to={`${user.website}`}>{user.website}</Link>
          </h5>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
