document.addEventListener('DOMContentLoaded', function () {
  // Checkout page: Toggle billing address visibility
  const shippingCheckbox = document.getElementById('sameAsShipping');
  const billingAddressFields = document.getElementById('billingAddressFields'); // Assume you'll add this ID

  if (shippingCheckbox && billingAddressFields) {
    shippingCheckbox.addEventListener('change', function () {
      if (this.checked) {
        billingAddressFields.style.display = 'none';
      } else {
        billingAddressFields.style.display = ''; // Or 'block', 'grid' depending on its default
      }
    });

    // Initial state based on checkbox
    if (shippingCheckbox.checked) {
      billingAddressFields.style.display = 'none';
    }
  }
});
