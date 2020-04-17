import React from 'react';

const ErrorPage = (props) => {
  const { status, msg } = props;
  return (
    <div className="ErrorPage">
      <h3>Uh oh, something's gone wrong :(</h3>
      <p>Status: {status}</p>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorPage;
