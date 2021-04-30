import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    //for each user, return user with user.id equal to this.props.userId
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

//2nd argument:ownProps refers to another prop sent by another component to the
//              mapStateToProp component. In this case, ownProps refers to props inside
//              componentDidMount()
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
