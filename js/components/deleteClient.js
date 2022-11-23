import deleteClientInfo from "./deleteClientInfo.js";

async function deleteClient (row) {
  await deleteClientInfo(row.children[0].textContent)
  row.remove();
}

export default deleteClient;
