//(PLACEHOLDER) function to gather form data and call our "POST /api/item/id" express route
const deleteItemHandler = async function (event) {
  event.preventDefault();

  //If delete button is selected with attribute of item-id,  then fetch api/item/id.  Allows for delete of item by id.
  if (event.target.hasAttribute('item-id')) {
    const id = event.target.getAttribute('item-id');

    console.log(event.target)
   

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


let allButtons = document.querySelectorAll ('.item-delete')
allButtons.forEach((button)=> {
  button.addEventListener('click', deleteItemHandler)
})
