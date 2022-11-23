import getServerInfo from './components/client-info.js';
import createFormForNewClient from './components/addClient.js';
import deleteClient from './components/deleteClient.js';
import deleteConfirmation from './components/deleteConfirmation.js';
import addChangeInfoBlock from './components/addChangeInfoBlock.js';
import getInfoForChangeBlock from './components/getInfoForChangeBlock.js';
import getDataForSearchInput from './components/getDataForSerachInput.js';
import addToolTip from './components/toolTip.js';

// получаем обертку
const tbody = document.querySelector('tbody');

// скачиваем данные с сервера, если они есть
await getServerInfo(tbody);


//интервал для поиска данных через input
let inteval = '';

// живой поиск
const inputSearch = document.querySelector('#search-input');
inputSearch.addEventListener('input', async () => {

  clearInterval(inteval);
  inteval = setTimeout( ()=> {
    getDataForSearchInput()
  }, 300)

})
// кнопка для добаления клиента
const btn = document.querySelector('#add-client');

// запуск формы ДОБАВИТЬ КЛИЕНТА
btn.addEventListener('click', createFormForNewClient);




// обработчик для удаления и изменения данных в таблице
tbody.addEventListener('click', async (e) => {

  if (e.target.closest('.delete-btn')) {
    const target = e.target.closest('.delete-btn')
    // функция появления модельного окна для удаления
    const deletePermissoin = deleteConfirmation(target.getAttribute('id-info'));

    deletePermissoin.modalWindow.addEventListener('click', async (e) => {


      // если true, то удаляю строку и дынные с сервера
      if (e.target.className === 'deleteConfirmationButtonConfirm') {

        // строки из таблицы
        const rows = document.querySelectorAll('.row');

        for (let row of rows) {
          if (row.children[0].textContent === deletePermissoin.buttonConfirm.id) {

            await deleteClient(row);

            // вызываю эту функцию снова, что б обновить данные для сортировки
            await getServerInfo(tbody);
            deletePermissoin.modalWindow.remove();

          }
        }
      }

      // по клику закрываю модальное окно удаления
      else if (e.target.className ===  "deleteConfirmationButtonCancel" || e.target.className === 'modalWindowdeleteConfirmation' || e.target.className === 'deleteConfirmationCancelImage') {
        deletePermissoin.modalWindow.remove();
      }


    })
  }

  //вызываю окно для изменения данных
  if(e.target.closest('.change-btn')) {
    const target = e.target.closest('.change-btn')
    const data = await getInfoForChangeBlock(target);
    await addChangeInfoBlock(data);
  }

})

tbody.addEventListener('mouseenter', addToolTip);










