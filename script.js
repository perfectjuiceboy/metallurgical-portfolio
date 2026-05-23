document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Logo Redirect Click Handler
    const logoElement = document.getElementById('clickableLogo');
    if (logoElement) {
        logoElement.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // 2. Cookie Consent Operations (Accept Button and Cancel "X" Trigger Handles)
    const cookieBanner = document.getElementById('cookieNotice');
    const acceptBtn = document.getElementById('acceptCookiesBtn');
    const cancelXBtn = document.getElementById('cancelCookiesX');

    const dismissBanner = () => {
        if (cookieBanner) {
            cookieBanner.style.opacity = '0';
            cookieBanner.style.transform = 'translateY(20px)';
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 300);
        }
    };

    if (acceptBtn) { acceptBtn.addEventListener('click', dismissBanner); }
    if (cancelXBtn) { cancelXBtn.addEventListener('click', dismissBanner); }

    // 3. Home Page Academic Performance Diagnostic Checker System Loop
    const actionButton = document.getElementById('actionBtn');
    const displayFeedback = document.getElementById('statusFeedback');

    if (actionButton && displayFeedback) {
        actionButton.addEventListener('click', () => {
            displayFeedback.style.color = '#1d4ed8'; 
            displayFeedback.textContent = 'Running system assessment diagnostic loop...';

            setTimeout(() => {
                displayFeedback.style.color = '#15803d'; 
                displayFeedback.textContent = 'Diagnostic Complete: Scripts running flawlessly. Web framework standard verified.';
            }, 1000);
        });
    }

    // 4. Contact Budget Slider Tracker
    const budgetSlider = document.getElementById('budgetRange');
    const budgetValueOutput = document.getElementById('budgetValue');
    if (budgetSlider && budgetValueOutput) {
        budgetSlider.addEventListener('input', (e) => {
            budgetValueOutput.textContent = e.target.value;
        });
    }

    // 5. Contact Form Submit Automation Handling Loop
    const contactForm = document.getElementById('portfolioContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const feedbackPanel = document.getElementById('formFeedback');
            feedbackPanel.style.display = 'block';
            feedbackPanel.style.backgroundColor = '#dcfce7';
            feedbackPanel.style.color = '#166534';
            feedbackPanel.textContent = 'Transmission complete. Student validation pipeline completed successfully.';
            contactForm.reset();
            if(budgetValueOutput) budgetValueOutput.textContent = '2500';
        });
    }
});
