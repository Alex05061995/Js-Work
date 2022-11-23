function deleteConfirmation (id) {

  const modalWindow = document.createElement('div');
  const wrapper = document.createElement('div');
  const cancelImage = document.createElement('img');
  const title = document.createElement('h2');
  const info = document.createElement('p');
  const buttonConfirm = document.createElement('button');
  const buttonCancel = document.createElement('button');

  modalWindow.classList.add('modalWindowdeleteConfirmation')
  wrapper.classList.add('deleteConfirmationWrapper');
  cancelImage.classList.add('deleteConfirmationCancelImage');
  title.classList.add('deleteConfirmationTitle');
  info.classList.add('deleteConfirmationInfo');
  buttonConfirm.classList.add('deleteConfirmationButtonConfirm');
  buttonCancel.classList.add('deleteConfirmationButtonCancel');

  cancelImage.src = '../../img/closeForm.svg';
  title.textContent = 'Удалить клиента';
  info.textContent = 'Вы действительно хотите удалить данного клиента?';
  buttonConfirm.textContent = 'Удалить';
  buttonConfirm.id = `${id}`
  buttonCancel.textContent = 'Отмена';

  modalWindow.append(wrapper);
  wrapper.append(cancelImage, title, info, buttonConfirm, buttonCancel);
  document.body.append(modalWindow);

  return {
    buttonConfirm,
    modalWindow,
  }
}

export default deleteConfirmation;
