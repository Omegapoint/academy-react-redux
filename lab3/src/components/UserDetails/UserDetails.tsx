import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/users/usersSlice";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import { User } from "../../models/user.model";

const UserDetails = () => {
  const user = useSelector(selectUser);

  if (user.status === "loading") {
    return <Spinner />;
  }

  if (user.status === "failed") {
    return <Error message="Something went wrong when fetching user details" />;
  }

  if (user.status === "success" && user.selectedUser !== null) {
    const { name, username, email, website, company } = user.selectedUser;
    return (
      <div className="UserDetails">
        {user && (
          <div className="alert alert-info">
            <h4 className="alert-heading">{name}</h4>
            <hr />
            <p>
              <b>Username: </b>
              {username}
            </p>
            <p>
              <b>Email: </b>
              {email}
            </p>
            <p>
              <b>Website: </b>
              {website}
            </p>
            <p>
              <b>Company: </b>
              {company.name}
            </p>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default UserDetails;
