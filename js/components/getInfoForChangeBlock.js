async function getInfoForChangeBlock (item) {
              const loader = document.querySelector('.lds-ring');
              const changeIcon = document.querySelector('.change-btn-loader');
              changeIcon.style.display = 'none';
              loader.style.display = 'inline-block';
              const clientInfo = await fetch(`http://localhost:3000/api/clients/${item.getAttribute('id-info')}`)
              .then(response => response.json())
              .then(data => {
                loader.style.display = 'none';
                changeIcon.style.display = 'inline';
                if(data) {
                  return data;
                }
              })
              return clientInfo
}

export default getInfoForChangeBlock;
