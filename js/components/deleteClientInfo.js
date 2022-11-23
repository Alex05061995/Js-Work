async function deleteClientInfo(id) {
  await fetch(`http://localhost:3000/api/clients/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

}

export default deleteClientInfo
