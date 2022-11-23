function addToolTip () {
  const icons = document.querySelectorAll('.icon-info');
  const toolTipWindow = document.createElement('div');
  toolTipWindow.classList.add('tooltip')
  const span = document.createElement('span');

  if(icons) {
    for(let icon of icons) {
      icon.addEventListener('mouseenter', () => {
        icon.append(toolTipWindow);
        span.textContent = icon.getAttribute('data-value');
        toolTipWindow.append(span);
      })
      icon.addEventListener('mouseleave', () => {
        toolTipWindow.remove()
      })
    }
  }



}

export default addToolTip
