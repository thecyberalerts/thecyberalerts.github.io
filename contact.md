---
layout: default
title: Contact Us
permalink: /contact/
---

<div class="contact-container">
    <h1>Contact The Cyber Alerts</h1>
    <p>Have a cybersecurity topic you'd like us to cover? Found an error? Want to collaborate?</p>
    
    <form class="contact-form" action="#" method="post">
        <div class="form-group">
            <label for="name">Name *</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="subject">Subject *</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        
        <div class="form-group">
            <label for="message">Message *</label>
            <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Send Message</button>
    </form>
    
    <div class="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <ul>
            <li><strong>Email:</strong> contact@thecyberalerts.com</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/thecyberalerts">@thecyberalerts</a></li>
            <li><strong>Twitter:</strong> <a href="https://twitter.com/thecyberalerts">@thecyberalerts</a></li>
        </ul>
    </div>
</div>

<style>
.contact-container {
    max-width: 600px;
    margin: 3rem auto;
    padding: 0 2rem;
}

.contact-container h1 {
    color: #00d4ff;
    text-align: center;
    margin-bottom: 1rem;
}

.contact-container > p {
    color: #888;
    text-align: center;
    margin-bottom: 3rem;
}

.contact-form {
    background: #1a1f3a;
    border-left: 4px solid #00d4ff;
    padding: 2rem;
    border-radius: 4px;
    margin-bottom: 3rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: #00d4ff;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    background: #0f1423;
    border: 1px solid #00d4ff;
    color: #f0f0f0;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #666;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ff006e;
    box-shadow: 0 0 10px rgba(255, 0, 110, 0.2);
}

.submit-btn {
    width: 100%;
    padding: 1rem;
    background: #00d4ff;
    color: #0a0e27;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    background: #ff006e;
    color: #f0f0f0;
    transform: translateY(-2px);
}

.contact-info {
    background: #1a1f3a;
    border-left: 4px solid #8338ec;
    padding: 2rem;
    border-radius: 4px;
}

.contact-info h3 {
    color: #00d4ff;
    margin-top: 0;
}

.contact-info ul {
    list-style: none;
    padding: 0;
}

.contact-info li {
    color: #d0d0d0;
    margin-bottom: 1rem;
}

.contact-info a {
    color: #00d4ff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-info a:hover {
    color: #ff006e;
}
</style>
