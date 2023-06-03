fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const jobData = data

    jobData.forEach(nasc => {
      const htmlCode = document.createElement('div')
      htmlCode.innerHTML = `
        <main class="main">
          <header class="cabecalho-photosnap">
            <div class="caixa-img-flex">
              <img src="${nasc.logo}" alt="${nasc.company}">
              <div class="conteudo-p1">
                <div class="cont-ps1">
                  <p class="photo">${nasc.company}</p>
                  ${nasc.new ? '<p class="New">New!</p>' : ''}
                  ${nasc.featured ? '<p class="Featured">Featured</p>' : ''}
                </div>
                <div class="caixa-frontend-flex">
                  <h2>${nasc.position}</h2>
                  <div class="caixa-btns">
                    <button class="b-1">${nasc.role}</button>
                    <button class="b-2">${nasc.level}</button>
                    ${nasc.languages.map(language => `<button class="b-3">${language}</button>`).join('')}
                    ${nasc.tools.map(tool => `<button class="b-4">${tool}</button>`).join('')}
                  </div>
                </div>
                <ul class="cont-ps2">
                  <p>${nasc.postedAt}</p>
                  <li>${nasc.contract}</li>
                  <li>${nasc.location}</li>
                </ul>
              </div>
            </div>
          </header>
        </main>
      `;

      document.body.appendChild(htmlCode);
    });

    const buttons = document.querySelectorAll('.b-1, .b-2, .b-3, .b-4')
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.textContent
        const nascCards = document.querySelectorAll('.main')
        
        nascCards.forEach(card => {
          const cardRoles = Array.from(card.querySelectorAll('.b-1, .b-2, .b-3, .b-4'))
          if (cardRoles.some(role => role.textContent === category)) {
            card.style.display = 'block'
          } else {
            card.style.display = 'none'
          }
        })
      })
    })

    const modalButtons = document.querySelectorAll('.b-1, .b-2, .b-3, .b-4')
    modalButtons.forEach(modalButton => {
      modalButton.addEventListener('click', () => {
        const modal = document.querySelector('dialog')
        modal.show()
      })
    })

    const closeButtons = document.querySelectorAll('#close')
    closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
        const modal = document.querySelector('dialog')
        modal.close()
      })
    })
  })
  .catch((error) => console.log('Error: ' +error))

