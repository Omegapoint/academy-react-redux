import React from 'react';
import {useSelector} from "react-redux";


const UserDetails = () => {
    const user = useSelector((state) => state.users.user);

    return (
        <div className="UserDetails">
            {user &&
                <div className="alert alert-info">
                    <h4 className="alert-heading">{user.name}</h4>
                    <hr/>
                    <p><b>Username: </b>{user.username}</p>
                    <p><b>Email: </b>{user.email}</p>
                    <p><b>Website: </b>{user.website}</p>
                    <p><b>Company: </b>{user.company.name}</p>
                </div>
            }
        </div>
    );
}

export default UserDetails;