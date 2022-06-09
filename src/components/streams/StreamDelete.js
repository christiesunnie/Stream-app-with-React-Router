import React from "react";
import { Link } from "react-router-dom";

const StreamDelete = () => {
  return (
    <div>
      Stream Delete
      <Link to="/streams/delete" />
    </div>
  );
};

export default StreamDelete;
