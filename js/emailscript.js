
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxRVW5ZgkIJEcCmSEfkMW9mp9i4HhJ8ucAp6vnQNmvZRFV98UVoYAq9bIrYZuBJTVSsUg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
