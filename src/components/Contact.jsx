import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ndwhmm",
        "template_vgn7mwz",
        form.current,
        "-4oycnTR3ZD_4v1_U"
      )
      .then(
        () => {
          setSuccess(true);       // ✅ Show success
          form.current.reset();   // ✅ Clear form

          // ✅ Auto hide after 3 sec
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ padding: "100px 20px", textAlign: "center" }}
    >
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {success && (
        <p
          style={{
            color: "lime",
            marginTop: "15px",
            fontWeight: "bold",
          }}
        >
          ✅ Message Sent Successfully!
        </p>
      )}
    </motion.section>
  );
};

export default Contact;