import createClient from './client.js';
import sortData from './sortData.js';
/**
функция для полуения всех данных с сервера
*/
const getServerInfo = async (container) => {
  let dataArray = [];
  container.innerHTML = `
  <div class = 'loader'>
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  `
  await fetch('http://localhost:3000/api/clients')
    .then(response => response.json())
    .then(data => {
      if (data) {
        container.innerHTML = ''
        data.forEach(item=> {
          dataArray.push(item);
        })
      }
    });


    for(let item of dataArray) {
      container.innerHTML += createClient(item);
    }

    sortData(dataArray)

}

  export default getServerInfo;
