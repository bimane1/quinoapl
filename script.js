// Identify Section - Preview Image
const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');

if (imageInput && previewImage) {
  imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.elements[0].value.trim();
    const email = this.elements[1].value.trim();
    const message = this.elements[2].value.trim();
    if (name && email && message) {
      alert('Thank you! Your message has been sent.');
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Add to Cart Buttons
const cartButtons = document.querySelectorAll('.btn-add-to-cart');
cartButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    const originalText = this.textContent;
    this.textContent = '✓ Added!';
    this.style.backgroundColor = '#2ecc71';
    setTimeout(() => {
      this.textContent = originalText;
      this.style.backgroundColor = '';
    }, 2000);
  });
});

// Cleanup unwanted text in body (bug fix)
document.addEventListener('DOMContentLoaded', () => {
  const bodyChildren = document.body.childNodes;
  bodyChildren.forEach(node => {
    if (node.nodeType === 3 && node.textContent.trim().startsWith('document.getElementBy')) {
      node.textContent = ''; // remove accidental output
    }
  });
});
