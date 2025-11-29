import React, { useState } from "react";

const init = {
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
};

const SignUpForm = () => {
  const [userData, setUserData] = useState({ ...init });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <div>
        <h4>
          First Name: <span>{userData.firstname}</span> Last Name:
          <span>{userData.lastname}</span> Email address:
          <span>{userData.email}</span> Phone Number:
          <span>{userData.phoneNumber}</span>
        </h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="First name"
            name="firstname"
            id="firstname"
            value={userData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            name="lastname"
            id="lastname"
            value={userData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
