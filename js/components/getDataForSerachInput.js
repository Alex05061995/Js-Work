import searchData from './searchData.js'
async function getDataForSearchInput () {
  return await fetch('http://localhost:3000/api/clients')
        .then(response => response.json())
        .then(data => {
          if(data) {
             return searchData(data)
          }
        })
}

export default getDataForSearchInput;
