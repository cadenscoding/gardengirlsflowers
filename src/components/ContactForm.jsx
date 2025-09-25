function ContactForm() {
  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="input-group">
          <i className="icon">👤</i>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="input-group">
          <i className="icon">✉️</i>
          <input type="email" placeholder="Your Email" required />
        </div>

        {/* New Dropdown for Occasion */}
        <div className="input-group">
          <i className="icon">🎉</i>
          <select required>
            <option value="">Select Occasion</option>
            <option value="wedding">Wedding</option>
            <option value="funeral">Funeral</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <i className="icon">💬</i>
          <textarea placeholder="Your Message" required></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;