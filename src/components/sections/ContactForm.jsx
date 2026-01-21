// ContactForm component - Contact form that submits to n8n webhook
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        "https://n8n.silvaautomation.com/webhook/6e7ec181-0a86-4d00-ace6-db03a7c0df28",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! We'll be in touch soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card glass-card--sm">
      <h3 className="section-title mb-4">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="(808) 555-1234"
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="form-input resize-none"
            placeholder="Tell us about your automation needs..."
          />
        </div>

        {status.message && (
          <div
            className={`status-message ${
              status.type === "success"
                ? "status-message--success"
                : "status-message--error"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-submit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
