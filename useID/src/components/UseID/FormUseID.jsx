import React, { useId } from "react";

const FormUseID = () => {
  // const username = useId();
  // const email = useId();

  // return (
  //   <form>
  //     <div>
  //       <label htmlFor={username}>Name</label>
  //       <input type="text" id={username} name="username" />
  //     </div>
  //     <div>
  //       <label htmlFor={email}>Email</label>
  //       <input type="email" id={email} name="email" />
  //     </div>
  //   </form>
  // );

  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={id + "username"}>Name</label>
        <input type="text" id={id + "username"} name="username" />
      </div>
      <div>
        <label htmlFor={id + "email"}>Email</label>
        <input type="email" id={id + "email"} name="email" />
      </div>
    </form>
  );
};

export default FormUseID;
