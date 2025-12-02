// Google Analytics event tracking
document.addEventListener('DOMContentLoaded', function() {
  // Track WhatsApp button clicks
  const whatsappButtons = document.querySelectorAll('a[href^="https://wa.me/"], .whatsapp-btn, .floating-whatsapp-btn');
  whatsappButtons.forEach(button => {
    button.addEventListener('click', function() {
      gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'WhatsApp Button Click',
        'transport_type': 'beacon'
      });
    });
  });
  
  // Track phone number clicks
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'Phone Number Click',
        'transport_type': 'beacon'
      });
    });
  });
  
  // Track email clicks
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'Email Link Click',
        'transport_type': 'beacon'
      });
    });
  });
  
  // Track "Get Started" button clicks
  const getStartedButtons = document.querySelectorAll('a[href="#get-started"], .btn[href="#get-started"]');
  getStartedButtons.forEach(button => {
    button.addEventListener('click', function() {
      gtag('event', 'click', {
        'event_category': 'navigation',
        'event_label': 'Get Started Button Click',
        'transport_type': 'beacon'
      });
    });
  });
  
  // Track service card clicks
  const serviceCards = document.querySelectorAll('.single-services');
  serviceCards.forEach(card => {
    card.addEventListener('click', function(event) {
      // Only trigger if the card itself is clicked, not nested elements
      if (event.target === card || card.contains(event.target) && !event.target.closest('a, button')) {
        const serviceName = card.querySelector('h4')?.textContent || 'Unknown Service';
        gtag('event', 'click', {
          'event_category': 'engagement',
          'event_label': `Service Card Click - ${serviceName}`,
          'transport_type': 'beacon'
        });
      }
    });
  });
  
  // Track timeline link clicks
  const timelineLinks = document.querySelectorAll('.timeline-link');
  timelineLinks.forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'Timeline Link Click',
        'transport_type': 'beacon'
      });
    });
  });
  
  // Track navigation menu clicks
  const navLinks = document.querySelectorAll('.nav-link, .page-scroll');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const linkText = link.textContent.trim() || link.getAttribute('href');
      gtag('event', 'click', {
        'event_category': 'navigation',
        'event_label': `Navigation Click - ${linkText}`,
        'transport_type': 'beacon'
      });
    });
  });
});