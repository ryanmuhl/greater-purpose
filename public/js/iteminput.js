const inputItemHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name').value.trim();
  const pickupAddress = document.querySelector('#address').value.trim();
  const phoneNumber = document.querySelector('#phone-number').value.trim();
  const itemName = document.querySelector('#item').value.trim();
  const itemDescription = document.querySelector('#item-drscription').value.trim();
  const pickupDate = document.querySelector('#date');
  
  const categorytext =  document.querySelector('select[name="category"]').value;
  const categoryid = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (firstName && lastName && pickupAddress && phoneNumber && itemName && itemDescription && pickupDate && categorytext) {
    console.log(categoryid);
    const response = await fetch('/api/item', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, pickupAddress, phoneNumber, itemName, itemDescription, pickupDate, categorytext}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add item');
    }
  }
};

document
  .querySelector('.item-form')
  .addEventListener('submit', inputItemHandler);
  