import "./Contact.css";

function Contact() {

  const submitHandler = (e) =>{
    e.preventDefault()
    return(
      console.log(e.target.value)
     
      )
  }
    

  return (
    <div className="contact" id="contact">
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
              <span> No 7 , Ebun street, Abule Ijesha , Lagosm Nigeria</span>
            </p>
            <p>
              Phone <span>+234 81 62345 454</span>
            </p>
            <p>
              E-mail _{" "}
              <span>
                olayiwolatofunmi212@gmail.com
              </span>
            </p>
            <p>
              Website _{" "}
              <span>
                <a href="https://my-portfolio-o39b-c0mhyh09a-olatito.vercel.app/"> https://my-portfolio-o39b-c0mhyh09a-olatito.vercel.app/</a>
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
                <button type="submit" onSubmit={submitHandler}>Contact us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
