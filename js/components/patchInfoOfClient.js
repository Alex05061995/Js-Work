async function patchInfoOfClient(user) {
  await fetch(`http://localhost:3000/api/clients/${user.id}`, {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })

}

export default patchInfoOfClient;
