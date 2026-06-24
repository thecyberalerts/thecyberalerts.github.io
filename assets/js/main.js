// Main JavaScript for blog functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.post-card').forEach(card => {
        observer.observe(card);
    });

    // Mobile menu toggle (if needed)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        const searchInput = searchBar.querySelector('input');
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchBar.submit();
            }
        });
    }

    // Copy code block to clipboard
    document.querySelectorAll('pre').forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.addEventListener('click', function() {
            const code = block.querySelector('code');
            const text = code.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
        block.appendChild(copyBtn);
    });

    // External links in new tab
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Table of contents generation for posts
    const postContent = document.querySelector('.post-content');
    if (postContent) {
        const headings = postContent.querySelectorAll('h2, h3');
        if (headings.length > 0) {
            const toc = document.createElement('div');
            toc.className = 'table-of-contents';
            toc.innerHTML = '<h3>Table of Contents</h3><ul>';
            
            headings.forEach((heading, index) => {
                const id = 'heading-' + index;
                heading.setAttribute('id', id);
                const link = document.createElement('a');
                link.href = '#' + id;
                link.textContent = heading.textContent;
                const li = document.createElement('li');
                li.appendChild(link);
                toc.querySelector('ul').appendChild(li);
            });
            
            toc.innerHTML += '</ul>';
            postContent.insertBefore(toc, postContent.firstChild);
        }
    }

    // Print article functionality
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    console.log('The Cyber Alerts blog loaded successfully');
});

// Utility function for API calls
function fetchArticles(category) {
    console.log('Fetching articles for category:', category);
    // Implementation would depend on backend setup
}

// Social sharing function
function shareArticle(platform) {
    const url = window.location.href;
    const title = document.querySelector('.post-title')?.textContent || 'Check this out';
    let shareUrl;

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}
