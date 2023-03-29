/* SHOW DESCRIPITON CARDS*/
let descriptions = document.querySelectorAll('.description');

for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].addEventListener('click', (e) => {
        if(e.currentTarget.classList.contains('descriptionAll')) {
            e.currentTarget.classList.remove('descriptionAll');
            e.currentTarget.classList.add('description');
        } else {
            e.currentTarget.classList.remove('description');
            e.currentTarget.classList.add('descriptionAll');
        }   
    });
}

/* FILTER CARDS */
let filterElement = document.querySelector('.input-search input')
let cards = document.querySelectorAll('.card-taks')
let buttonSubmit = document.querySelector('.btn-filter')

buttonSubmit.addEventListener('click', filterCards)

function filterCards(event) {

    if(filterElement.value != ' ') {
        for(let card of cards) {
            let title = card.querySelector('.title-card');

            title = title.textContent.toLowerCase();

            let filterText = filterElement.value.toLowerCase();

            if (!title.includes(filterText)) {
                card.style.display = 'none';
            } else {
                card.style.display = 'grid'
            }
        }
    } else {
        for(let card of cards) {
            card.style.display = 'grid';
        }
    }

    if(filterElement.value != ' ') {
    
        for(let card of cards) {
            let description = card.querySelector('.description');

            description = description.textContent.toLowerCase();

            let filterDescription = filterElement.value.toLowerCase();

            if(!description.includes(filterDescription)) {
                card.style.display = 'none';
            } else {
                card.style.display = 'grid'
            }
        }
    } else {
        for(let card of cards) {
            card.style.display = 'grid'
        }
    }
}



/* IDENTIFY CURRENT PAGE */
const currentUrl = window.location.href;
const links = document.querySelectorAll('.nav-links');

links.forEach(link => {
    if(link.href === currentUrl) {
        link.classList.add('active')
    }
})