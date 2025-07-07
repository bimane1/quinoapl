// إرسال نموذج الاتصال
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.elements[0].value;
    const email = this.elements[1].value;
    const message = this.elements[2].value;
    console.log('Message Sent:', { name, email, message });
    alert('Thank you! Your message has been sent.');
    this.reset();
  });
}

// زر "Add to Cart"
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const originalText = this.textContent;
    this.textContent = 'Added!';
    this.style.backgroundColor = '#2ecc71';
    setTimeout(() => {
      this.textContent = originalText;
      this.style.backgroundColor = '';
    }, 2000);
  });
});
