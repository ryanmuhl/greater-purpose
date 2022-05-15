
const deleteItemHandler = async function (event) {
    event.preventDefault();
  
    if (event.target.hasAttribute('item-id')) {
        const id = event.target.getAttribute('item-id');

       console.log(id)

      const response = await fetch(`/api/item/${id}`, {
        method: 'DELETE',

        
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed To Delete Item');
      }
    }
  };


  document
  .querySelector('#item-delete')
  .addEventListener('click', deleteItemHandler);
 