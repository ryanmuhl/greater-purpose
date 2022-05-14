const inputItemHandler = async (event) => {
  event.preventDefault();
let item = {};
   item.first_name = document.querySelector('#first-name').value.trim();
   item.last_name = document.querySelector('#last-name').value.trim();
   item.pickup_address = document.querySelector('#address').value.trim();
   item.phone_number = document.querySelector('#phone-number').value.trim();
   item.item_name = document.querySelector('#item').value.trim();
   item.item_description = document.querySelector('#item-drscription').value.trim();
   item.pickup_date = document.querySelector('#date').value
   item.category_id =  document.querySelector('#category').value;
  
 if (item.first_name && 
    item.last_name && 
    item.pickup_address && 
    item.phone_number && 
    item.item_name && 
    item.item_description && 
    item.pickup_date && 
    item.category_id) {

    const response = await fetch('/api/item', {
      method: 'POST',
      body: JSON.stringify(item),
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
  