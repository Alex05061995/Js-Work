/**
 * Функция для добовления поля контактов(мейл, телефон и тп) в форме "НОВЫЙ КЛИЕНТ"
 */
let ID = 1;
function addContactField (container) {


  const wrapper = document.createElement('div');
  const selectBox = document.createElement('div');
  const selectBoxText = document.createElement('span')
  const optionBlock = document.createElement('div');
  const list = document.createElement('ul');
  const itemFirst = document.createElement('li');
  const itemSecond = document.createElement('li');
  const itemThird = document.createElement('li');
  const itemFourth = document.createElement('li');
  const itemFifth = document.createElement('li');
  const inputField = document.createElement('input');

  wrapper.classList.add('select-wrapper');

  selectBox.classList.add('select-box');

  selectBoxText.classList.add('select-box-text');
  selectBoxText.textContent = 'Телефон';
  selectBoxText.setAttribute('type', 'telephone');


  optionBlock.classList.add('select-options');
  list.classList.add('select-list');

  itemFirst.classList.add('select-item', 'select-item-first');
  itemFirst.textContent = 'Телефон';
  itemFirst.setAttribute('type', 'telephone');

  itemSecond.classList.add('select-item', 'select-item-second');
  itemSecond.textContent = 'Доп. телефон';
  itemSecond.setAttribute('type', 'extra-telephone')

  itemThird.classList.add('select-item', 'select-item-third');
  itemThird.textContent = 'Email';
  itemThird.setAttribute('type', 'email');

  itemFourth.classList.add('select-item', 'select-item-fourth');
  itemFourth.textContent = 'VK';
  itemFourth.setAttribute('type', 'vk');

  itemFifth.classList.add('select-item', 'select-item-fifth');
  itemFifth.textContent = 'Facebook';
  itemFifth.setAttribute('type', 'facebook');

  inputField.classList.add('select-input');

  setSelectedName([itemFirst, itemSecond, itemThird, itemFourth, itemFifth], selectBoxText);

  selectBox.addEventListener('click', () => {

      optionBlock.classList.toggle('active');

  })

  list.append(itemFirst, itemSecond, itemThird, itemFourth, itemFifth);
  optionBlock.append(list)
  selectBox.append(selectBoxText ,optionBlock);
  wrapper.append(selectBox, inputField);

  if(ID>10) {
    return
  }

  container.append(wrapper)

  ID++;

}

const setSelectedName = (itemsArray, showBlock) => {
  for(let item of itemsArray) {
    item.addEventListener('click', () => {
      showBlock.innerText = item.innerText;
      showBlock.setAttribute('type', item.getAttribute('type'))
    })
  }
}

export default addContactField;
