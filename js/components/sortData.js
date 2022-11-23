import createClient from "./client.js";

function sortData (data) {
  const headRowButtons = document.querySelector('thead');
  const container = document.querySelector('tbody');
  const headColumns = document.querySelectorAll('.head-td');

  headRowButtons.addEventListener('click', (e) => {
    container.innerHTML = '';
    if(e.target.classList.contains('head-td-id') && e.target.classList.contains('down')) {

      for (let column of headColumns) {
        column.classList.remove('down');

        data.sort((a,b) => {
          if (a['id'] > b['id']) {
            return -1
          }
        });

      }

      e.target.classList.add('up');

    }

    else if(e.target.classList.contains('head-td-id') && e.target.classList.contains('up') || e.target.classList.contains('head-td-id')) {

      for (let column of headColumns) {
        column.classList.remove('up');

        data.sort((a,b) => {
          if (a['id'] < b['id']) {
            return -1
          }
        });

      }

      e.target.classList.add('down');

    }

    else if(e.target.classList.contains('head-td-name') && e.target.classList.contains('down')) {


      for (let column of headColumns) {
        column.classList.remove('down');

        data.sort((a,b) => {
          if (a['name'] > b['name']) {
            return -1
          }
        });

      }

      e.target.classList.add('up');

    }

    else if(e.target.classList.contains('head-td-name') && e.target.classList.contains('up') || e.target.classList.contains('head-td-name')) {


      for (let column of headColumns) {
        column.classList.remove('up');

        data.sort((a,b) => {
          if (a['name'] < b['name']) {
            return -1
          }
        });

      }

      e.target.classList.add('down');

    }


    else if(e.target.classList.contains('head-td-data') && e.target.classList.contains('down')) {


      for (let column of headColumns) {
        column.classList.remove('down');

        data.sort((a,b) => {
          if (a['createdAt'] > b['createdAt']) {
            return -1
          }
        });

      }

      e.target.classList.add('up');

    }

    else if(e.target.classList.contains('head-td-data') && e.target.classList.contains('up') || e.target.classList.contains('head-td-data')) {


      for (let column of headColumns) {
        column.classList.remove('up');

        data.sort((a,b) => {
          if (a['createdAt'] < b['createdAt']) {
            return -1
          }
        });

      }

      e.target.classList.add('down');

    }



    else if(e.target.classList.contains('head-td-change') && e.target.classList.contains('down')) {

      for (let column of headColumns) {
        column.classList.remove('down');

        data.sort((a,b) => {
          if (a['updatedAt'] > b['updatedAt']) {
            return -1
          }
        });

      }

      e.target.classList.add('up');

    }

    else if(e.target.classList.contains('head-td-change') && e.target.classList.contains('up') || e.target.classList.contains('head-td-change')) {


      for (let column of headColumns) {
        column.classList.remove('up');

        data.sort((a,b) => {
          if (a['updatedAt'] < b['updatedAt']) {
            return -1
          }
        });

      }

      e.target.classList.add('down');

    }


    for (let object of data) {
      container.innerHTML += createClient(object)
    }

  })

}

export default sortData;
