async function addClient(user) {
  await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })

}

export default addClient;
