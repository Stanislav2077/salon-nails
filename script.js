const serviceCheckboxes = document.querySelectorAll('input[name="service"]');
const totalPriceSpan = document.querySelector('.total-price');
const zoomableImages = document.querySelectorAll('.zoomable');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');
const expandedImage = document.getElementById('expanded-image');

serviceCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateTotalPrice);
});

function updateTotalPrice() {
  let total = 0;
  serviceCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      total += parseFloat(checkbox.getAttribute('data-price'));
    }
  });
  totalPriceSpan.textContent = `${total} ₽`;
}

zoomableImages.forEach(image => {
  image.addEventListener('click', function () {
    modal.style.display = 'block';
    expandedImage.src = this.src;
  });
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});