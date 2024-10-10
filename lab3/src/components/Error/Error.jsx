import React from "react";

const Error = ({ message }) => (
  <div class="alert alert-danger" role="alert">
    <h4 class="alert-heading">Error</h4>
    {message}
  </div>
);

export default Error;
