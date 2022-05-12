const userPage = async () => {
    const response = await fetch('/api/user/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/userinput');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#userinput').addEventListener('click', userPage);
  