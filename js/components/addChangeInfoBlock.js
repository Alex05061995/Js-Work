import addContactField from "./addContactField.js";
import getServerInfo from "./client-info.js";
import deleteClient from "./deleteClient.js";
import deleteConfirmation from "./deleteConfirmation.js";
import patchInfoOfClient from "./patchInfoOfclient.js";


async function addChangeInfoBlock(data) {

  const tbody = document.querySelector('tbody');

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-window');

  const addBlockWrapper = document.createElement('div');
  addBlockWrapper.classList.add('addBlockWrapper');

  const closeIcon = document.createElement('buton');
  closeIcon.innerHTML = `<svg class = 'icon-close' svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z" fill="#B0B0B0"/>
  </svg>
  `
  closeIcon.classList.add('addBlockWrapper-closeIcon');

  const mainTitle = document.createElement('h2');
  mainTitle.textContent = 'Изменить данные';
  mainTitle.classList.add('addBlockWrapper-mainTitle');

  const inputSerName = document.createElement('input');
  inputSerName.type = 'text';
  inputSerName.placeholder = 'Фамилия*';
  inputSerName.value = `${data.surname}`;
  inputSerName.classList.add('addBlockWrapper-inputSerName', 'addBlockWrapper-input');

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Имя*';
  inputName.value = `${data.name}`;
  inputName.classList.add('addBlockWrapper-inputName', 'addBlockWrapper-input');

  const inputLastName = document.createElement('input');
  inputLastName.type = 'text';
  inputLastName.placeholder = 'Отчество';
  inputLastName.value = `${data.lastName}`;
  inputLastName.classList.add('addBlockWrapper-inputLastName', 'addBlockWrapper-input');

  const addContactInfoWrapper = document.createElement('div');
  addContactInfoWrapper.classList.add('addContactInfoWrapper')

  const addContactInfo = document.createElement('btn');
  addContactInfo.textContent = 'Добавить контакт';
  addContactInfo.classList.add('addBlockWrapper-addContactInfo');

  const saveBtn = document.createElement('btn');
  saveBtn.textContent = 'Сохранить';
  saveBtn.classList.add('addBlockWrapper-saveBtn');

  const removeBtn = document.createElement('btn');
  removeBtn.textContent = 'Удалить клиента';
  removeBtn.classList.add('addBlockWrapper-removeBtn');

  addContactInfoWrapper.append(addContactInfo)
  addBlockWrapper.append(closeIcon, mainTitle, inputSerName, inputName, inputLastName, addContactInfoWrapper, saveBtn, removeBtn);
  modalWindow.append(addBlockWrapper);
  document.body.append(modalWindow);


  if (data.contacts) {
    for (let i = 0; i < data.contacts.length; i++) {
      addContactField(addContactInfoWrapper);
    }
    const inputs = document.querySelectorAll('.select-input');
    const typeOptions = document.querySelectorAll('.select-box-text');
    for (let i = 0; i < data.contacts.length; i++) {
      inputs[i].value = data.contacts[i].value;
      typeOptions[i].setAttribute('type', data.contacts[i].type)
      if (typeOptions[i].getAttribute('type') === 'telephone') {
        typeOptions[i].textContent = 'Телефон'
      }
      if (typeOptions[i].getAttribute('type') === 'extra-telephone') {
        typeOptions[i].textContent = 'Доп. телефон'
      }
      if (typeOptions[i].getAttribute('type') === 'email') {
        typeOptions[i].textContent = 'Email'
      }
      if (typeOptions[i].getAttribute('type') === 'vk') {
        typeOptions[i].textContent = 'VK'
      }
      if (typeOptions[i].getAttribute('type') === 'facebook') {
        typeOptions[i].textContent = 'Facebook'
      }
    }
  }



  modalWindow.addEventListener('click', async (e) => {
    if (e.target == modalWindow) {
      modalWindow.remove()
    }

    if (e.target.closest('.addBlockWrapper-closeIcon')) {
      modalWindow.remove()
    }

    if (e.target === addContactInfo) {
      addContactField(addContactInfoWrapper)
    }

    if (e.target === saveBtn) {
      const contactSelects = document.querySelectorAll('.select-box-text');
      const inputValues = document.querySelectorAll('.select-input');

      const contacts = [];


      for (let i = 0; i < inputValues.length; i++) {
        contacts.push({
          type: contactSelects[i].getAttribute('type'),
          value: inputValues[i].value
        })
      }

      const client = {
        id: data.id,
        name: inputName.value.trim(),
        surname: inputSerName.value.trim(),
        lastName: inputLastName.value.trim(),
        contacts: contacts
      }

      await patchInfoOfClient(client)
      await getServerInfo(tbody);
      modalWindow.remove()
    }


    //удаление клиента
    if (e.target === removeBtn) {
      modalWindow.remove()
      const deletePermissoin = deleteConfirmation(data.id);
      const wrapperOfConfirmationForDelete = document.querySelector('.deleteConfirmationWrapper');
      if (wrapperOfConfirmationForDelete) {
        wrapperOfConfirmationForDelete.addEventListener('click', async (e) => {
          if (e.target.className === 'deleteConfirmationButtonConfirm') {

            //строки из таблицы
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
        })
      }
    }
  })

}

export default addChangeInfoBlock;
