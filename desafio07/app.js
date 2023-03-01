/* Input "Pesquise por nome" */
const filterElement = document.querySelector('.search-field .input')

const cards = document.querySelectorAll('.card')

const form = document.querySelector('.content-search');

form.addEventListener('submit', filterCards);

function filterCards(event) {
    event.preventDefault();

    if (filterElement.value != ' ') {
        for(let card of cards) {
            let title = card.querySelector('h3');

            title = title.textContent.toLowerCase();

            let filterText = filterElement.value.toLowerCase();

            if(!title.includes(filterText)) {
                card.style.display = 'none'
            } else {
                card.style.display = 'block';
            }
        }
    } else {
        for(let card of cards) {
            card.style.display = 'block';
        }
    };
}