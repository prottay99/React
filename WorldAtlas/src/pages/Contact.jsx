export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="container contact">
      <h1 className="contact_title">Contact Us</h1>

      <div className="contact_wraper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email address"
            name="email"
          />
          <textarea
            rows="10"
            name="message"
            placeholder="Enter your message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" className="btn btn-darken">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
