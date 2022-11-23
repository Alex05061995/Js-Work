import createClient from "./client.js";
import getServerInfo from "./client-info.js";
import sortData from "./sortData.js"

async function searchData (data) {

  const container = document.querySelector('tbody');

  container.innerHTML = '';


  const searchInput = document.querySelector('#search-input');

  let dataArray = [];

  data.filter(item => {
    if(item.name.search(searchInput.value) > -1 || item.surname.search(searchInput.value) > -1 || item.lastName.search(searchInput.value) > -1) {
      dataArray.push(item);
    }
  })


  if(dataArray.length>0 || searchInput.value.length>0) {
    dataArray.forEach(obj => {
      container.innerHTML += createClient (obj);
    })
  } else if (dataArray.length === 0) {
    await getServerInfo(container);
  }

  sortData(dataArray)
}

export default searchData;
