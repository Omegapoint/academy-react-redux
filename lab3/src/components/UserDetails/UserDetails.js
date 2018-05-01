import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserDetails extends Component {

    render() {
        return (
            <div className="UserDetails">
                {this.props.user &&
                <div class="alert alert-info">
                  <h4 class="alert-heading">{this.props.user.name}</h4>
                  <hr/>
                  <p><b>Username: </b>{this.props.user.username}</p>
                  <p><b>Email: </b>{this.props.user.email}</p>
                  <p><b>Website: </b>{this.props.user.website}</p>
                  <p><b>Company: </b>{this.props.user.company.name}</p>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user
    };
}

export default connect(mapStateToProps, null)(UserDetails);
