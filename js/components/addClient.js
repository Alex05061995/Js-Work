import addClient from "./addClient-info.js";
import addContactField from './addContactField.js';
import getServerInfo from "./client-info.js";

const tbody = document.querySelector('tbody');

/**
 функция для создания модального окна для добаления нового студента
  */

function createFormForNewClient () {

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-window');

  const addBlockWrapper = document.createElement('div');
  addBlockWrapper.classList.add('addBlockWrapper');

  const closeIcon = document.createElement('buton');
  closeIcon.innerHTML = `<svg class = 'icon-close' svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z" fill="#B0B0B0"/>
  </svg>
  `
  closeIcon.classList.add('addBlockWrapper-closeIcon')

  const mainTitle = document.createElement('h2');
  mainTitle.textContent = 'Новый клиент';
  mainTitle.classList.add('addBlockWrapper-mainTitle');

  const inputSerName = document.createElement('input');
  inputSerName.type = 'text';
  inputSerName.placeholder = 'Фамилия*';
  inputSerName.classList.add('addBlockWrapper-inputSerName', 'addBlockWrapper-input');

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Имя*';
  inputName.classList.add('addBlockWrapper-inputName', 'addBlockWrapper-input');

  const inputLastName = document.createElement('input');
  inputLastName.type = 'text';
  inputLastName.placeholder = 'Отчество';
  inputLastName.classList.add('addBlockWrapper-inputLastName', 'addBlockWrapper-input');

  const addContactInfoWrapper = document.createElement('div');
  addContactInfoWrapper.classList.add('addContactInfoWrapper')

  const addContactInfo = document.createElement('btn');
  addContactInfo.textContent = 'Добавить контакт';
  addContactInfo.classList.add('addBlockWrapper-addContactInfo');

  const saveBtn = document.createElement('btn');
  saveBtn.textContent = 'Сохранить';
  saveBtn.classList.add('addBlockWrapper-saveBtn');

  const cancelBtn = document.createElement('btn');
  cancelBtn.textContent = 'Отмена';
  cancelBtn.classList.add('addBlockWrapper-cancelBtn');

  addContactInfoWrapper.append(addContactInfo)
  addBlockWrapper.append(closeIcon, mainTitle, inputSerName, inputName, inputLastName, addContactInfoWrapper, saveBtn, cancelBtn);
  modalWindow.append(addBlockWrapper);
  document.body.append(modalWindow);


  modalWindow.addEventListener('click', async (e) => {
    if(e.target.className === 'modal-window' || e.target.className === 'addBlockWrapper-closeIcon' || e.target.className === 'addBlockWrapper-cancelBtn' || e.target.className === 'icon-close' || e.target.closest('.icon-close')) {
      modalWindow.remove()
    }

    if(e.target.className === 'addBlockWrapper-saveBtn') {

      const contactSelects = document.querySelectorAll('.select-box-text');
      const inputValues = document.querySelectorAll('.select-input');

      const contacts =[];


      for(let i=0; i<inputValues.length; i++) {
        contacts.push({
          type: contactSelects[i].getAttribute('type'),
          value: inputValues[i].value
        })
      }

      const client = {
        name: inputName.value.trim(),
        surname: inputSerName.value.trim(),
        lastName: inputLastName.value.trim(),
        contacts: contacts
      }

      await addClient(client);
      await getServerInfo(tbody);
      modalWindow.remove()
    }

    if(e.target.className === 'addBlockWrapper-addContactInfo') {
      addContactField(addContactInfoWrapper)
    }

  })

}

export default createFormForNewClient;






