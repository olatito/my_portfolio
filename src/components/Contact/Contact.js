import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="inner-contact">
        <header className="contact-header">
          <h1>
            Contact <span> Me </span>
          </h1>
          <p>Selected key React concepts you should know about</p>
        </header>
        <div className="contact-forms">
          <div className="contact-details">
            <p>
              Address _{" "}
              <span> 23 S 80 Road, Benedict,ne, 68316 United States</span>
            </p>
            <p>
              Phone <span>23 S 80 Road, Benedict,ne, 68316 United States</span>
            </p>
            <p>
              E-mail _{" "}
              <span>
                Address _ 23 S 80 Road, Benedict,ne, 68316 United States
              </span>
            </p>
            <p>
              Website _{" "}
              <span>
                Address _ 23 S 80 Road, Benedict,ne, 68316 United States
              </span>
            </p>
          </div>
          <div className="contact-form">
            <form>
              <input
                type="text"
                placeholder="Name"
                className="name_input"
                required
              />
              <input
                type="text"
                rows="5"
                cols="60"
                placeholder="Message"
                className="message_input"
                required
              />
              <div className="contact_button">
                <button type="submit">Contact us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
