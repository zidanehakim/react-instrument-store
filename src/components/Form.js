import "./../Form.css";

function Form(props) {
  return (
    <div className="wrapper">
      <div className="inner">
        <form action="">
          <h3>Contact Us</h3>
          <p>fill the form below, let us know your problem..</p>
          <label className="form-group">
            <input type="text" className="form-control" placeholder="full name" required />
            <span>Your Name</span>
            <span className="border" />
          </label>
          <label className="form-group">
            <input type="email" className="form-control" placeholder="email" required />
            <span htmlFor="">Your Mail</span>
            <span className="border" />
          </label>
          <label className="form-group" id="message">
            <textarea name="" id="" className="form-control-textarea px-3 py-2" required defaultValue={""} />
            <span htmlFor="" style={{ top: "11px", left: "15px" }}>
              Your Message
            </span>
          </label>
          <button>
            Submit
            <i className="zmdi zmdi-arrow-right" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
