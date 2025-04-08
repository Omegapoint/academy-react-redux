import React from "react";

type Props = {
  message: string;
};

const Error = ({ message }: Props) => (
  <div className="alert alert-danger" role="alert">
    <h4 className="alert-heading">Error</h4>
    {message}
  </div>
);

export default Error;
