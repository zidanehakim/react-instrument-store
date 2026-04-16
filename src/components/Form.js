import { useState } from "react";
import "./../Form.css";

function Form() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    // Simulate async send (no real backend needed for demo)
    setTimeout(() => {
      setSubmitting(false);
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="wrapper">
      <div className="inner">
        {status === "success" ? (
          <div className="formSuccess">
            <div className="formSuccessIcon">✓</div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. We'll get back to you shortly.</p>
            <button
              className="formResetBtn"
              onClick={() => setStatus(null)}
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h3>Contact Us</h3>
            <p>Fill in the form below — we're ready to help.</p>

            <label className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="full name"
                value={fields.name}
                onChange={handleChange}
                required
              />
              <span>Your Name</span>
              <span className="border" />
            </label>

            <label className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
                value={fields.email}
                onChange={handleChange}
                required
              />
              <span>Your Mail</span>
              <span className="border" />
            </label>

            <label className="form-group" id="message">
              <textarea
                name="message"
                className="form-control-textarea px-3 py-2"
                value={fields.message}
                onChange={handleChange}
                required
              />
              <span style={{ top: "11px", left: "15px" }}>Your Message</span>
            </label>

            {status === "error" && (
              <p style={{ color: "#ff6b6b", fontSize: "0.82em", marginBottom: "0.5em" }}>
                Please fill in all fields.
              </p>
            )}

            <button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Submit"}
              {!submitting && <i className="zmdi zmdi-arrow-right" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
