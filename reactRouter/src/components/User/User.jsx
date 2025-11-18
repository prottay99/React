import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-blue-600 text-white text-center text-2xl">
      User: {userid}
    </div>
  );
};

export default User;
