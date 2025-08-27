(function(){
  // Function: remove error styles
  field.removeAttribute('aria-invalid');
  field.style.borderColor = '#e4e7ea';
  }
  });
  return ok;
})();

// ===========================
// Appointment form with EmailJS
// ===========================
const apptForm = document.getElementById('appointmentForm');
const apptStatus = document.getElementById('appointmentStatus');

if(apptForm && apptStatus){
  apptForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    if(!validateForm(apptForm)){
      apptStatus.textContent = 'Please complete all required fields.';
      return;
    }

    apptStatus.textContent = 'Sending…';

    try{
      if(window.emailjs){
        const params = {
          name: apptForm.name.value,
          email: apptForm.email.value,
          phone: apptForm.phone.value,
          date: apptForm.date.value,
          message: apptForm.message.value
        };

        // EmailJS send (updated keys)
        await emailjs.send('service_036e7i7','template_tnvn598', params);

        apptStatus.textContent = 'Thanks! Your appointment request has been sent.';
        apptForm.reset();
      } else {
        // Fallback to mailto
        const body = encodeURIComponent(
          `Name: ${apptForm.name.value}\nEmail: ${apptForm.email.value}\nPhone: ${apptForm.phone.value}\nPreferred Date: ${apptForm.date.value}\nMessage: ${apptForm.message.value}`
        );
        window.location.href = `mailto:hello@wellspringclinic.example?subject=Appointment%20Request&body=${body}`;
        apptStatus.textContent = 'Opening your email client…';
      }
    } catch(err){
      apptStatus.textContent = 'Sorry, something went wrong. Please try again later.';
      console.error(err);
    }
  });
}

// ===========================
// Contact form with EmailJS
// ===========================
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if(contactForm && contactStatus){
  contactForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    if(!validateForm(contactForm)){
      contactStatus.textContent = 'Please complete all required fields.';
      return;
    }

    contactStatus.textContent = 'Sending…';

    try{
      if(window.emailjs){
        const params = {
          name: contactForm.name.value,
          email: contactForm.email.value,
          message: contactForm.message.value
        };

        // EmailJS send (updated keys)
        await emailjs.send('service_036e7i7','template_jpro4u3', params);

        contactStatus.textContent = 'Thanks! Your message has been sent.';
        contactForm.reset();
      } else {
        // Fallback to mailto
        const body = encodeURIComponent(
          `Name: ${contactForm.name.value}\nEmail: ${contactForm.email.value}\nMessage: ${contactForm.message.value}`
        );
        window.location.href = `mailto:hello@wellspringclinic.example?subject=Website%20Enquiry&body=${body}`;
        contactStatus.textContent = 'Opening your email client…';
      }
    } catch(err){
      contactStatus.textContent = 'Sorry, something went wrong. Please try again later.';
      console.error(err);
    }
  });
})();
