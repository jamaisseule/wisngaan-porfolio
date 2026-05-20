import { useState } from "react";
import { CONTACT_ITEMS } from "../../constants/data";

import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Contact.module.css";

/* API CONFIG (DEV + PROD) */

const API_URL = import.meta.env.VITE_API_URL;

const SEND_ENDPOINT = API_URL
  ? `${API_URL.replace(/\/$/, "")}/send`
  : "/send";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const response = await fetch(SEND_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Send failed");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className={`section-wrapper ${styles.section}`}>
      <SectionHeading title="CONTACT" />

      <Reveal delay={0.1}>
        <div className={styles.card}>
          <p className={styles.ctaText}>LET’S CONNECT</p>

          {/* SOCIAL */}
          <div className={styles.iconRow}>
            {CONTACT_ITEMS.map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.iconLink}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className={styles.success}>Message sent successfully ✦</p>
            )}

            {status === "error" && (
              <p className={styles.error}>Failed to send message</p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}