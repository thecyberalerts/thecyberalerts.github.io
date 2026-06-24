---
layout: default
title: Categories
permalink: /categories/
---

<div class="categories-container">
    <h1>Article Categories</h1>
    <p>Browse our cybersecurity articles by category</p>
    
    <div class="categories-grid">
        <div class="category-item">
            <h3>🔐 Cybersecurity</h3>
            <p>General cybersecurity topics and overview articles</p>
            <a href="/categories/cybersecurity/" class="category-link">Browse →</a>
        </div>
        
        <div class="category-item">
            <h3>🚨 Threat Analysis</h3>
            <p>In-depth analysis of cyber threats and attack patterns</p>
            <a href="/categories/threat-analysis/" class="category-link">Browse →</a>
        </div>
        
        <div class="category-item">
            <h3>⚠️ Vulnerability</h3>
            <p>Vulnerability assessments and security flaws</p>
            <a href="/categories/vulnerability/" class="category-link">Browse →</a>
        </div>
        
        <div class="category-item">
            <h3>🔍 Incident Response</h3>
            <p>Incident response procedures and case studies</p>
            <a href="/categories/incident-response/" class="category-link">Browse →</a>
        </div>
        
        <div class="category-item">
            <h3>✅ Best Practices</h3>
            <p>Security best practices and recommendations</p>
            <a href="/categories/best-practices/" class="category-link">Browse →</a>
        </div>
        
        <div class="category-item">
            <h3>📚 Educational</h3>
            <p>Educational content and security awareness</p>
            <a href="/categories/educational/" class="category-link">Browse →</a>
        </div>
    </div>
</div>

<style>
.categories-container {
    max-width: 1000px;
    margin: 3rem auto;
    padding: 0 2rem;
}

.categories-container h1 {
    color: #00d4ff;
    text-align: center;
    margin-bottom: 0.5rem;
}

.categories-container > p {
    color: #888;
    text-align: center;
    margin-bottom: 3rem;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.category-item {
    background: #1a1f3a;
    border-left: 4px solid #00d4ff;
    padding: 2rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.category-item:hover {
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.15);
    transform: translateY(-5px);
    border-left-color: #ff006e;
}

.category-item h3 {
    color: #00d4ff;
    margin-top: 0;
    font-size: 1.5rem;
}

.category-item p {
    color: #888;
    line-height: 1.6;
}

.category-link {
    display: inline-block;
    color: #00d4ff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #00d4ff;
    border-radius: 4px;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.category-link:hover {
    background: #00d4ff;
    color: #0a0e27;
}
</style>
