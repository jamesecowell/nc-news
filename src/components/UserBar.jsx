import React from 'react';

const UserBar = (props) => {
  return (
    <div className="UserBar">
      <p>You are signed in as: {props.username}</p>
    </div>
  );
};

export default UserBar;
