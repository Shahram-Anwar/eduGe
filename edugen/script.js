// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.faq-toggle');
        
        answer.classList.toggle('active');
        toggle.classList.toggle('active');
        
        if (toggle.textContent === '+') {
            toggle.textContent = '×';
        } else {
            toggle.textContent = '+';
        }
    });
});

// Upload area click handler
document.getElementById('uploadArea').addEventListener('click', () => {
    document.querySelector('.file-input').click();
});

// Profile tab switching
document.querySelectorAll('.profile-menu li').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and menu items
        document.querySelectorAll('.profile-menu li').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.profile-tab').forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to clicked tab
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Avatar change functionality
document.getElementById('change-avatar').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('profile-picture').src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-links').style.display = 'none';
            }
        }
    });
});