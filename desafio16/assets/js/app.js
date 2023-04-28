const filterElement = document.getElementById('filter');

const contacts = document.querySelectorAll('.contact');

const form = document.querySelector('.search');

const categorys = document.querySelectorAll('.category');

form.addEventListener('submit', filterContact);

function filterContact(event) {
    event.preventDefault();

    if (filterElement.value.trim() !== '') {
        for(let contact of contacts) {
            let contactName = contact.querySelector('.contact-name').textContent.toLowerCase();
    
            let filterText = filterElement.value.toLowerCase();
    
            if(!contactName.includes(filterText)) {
                contact.style.display = 'none';
                for(let category of categorys) {
                    category.style.display = 'none'
                }
            } else {
                contact.style.display = 'block';
            };
        }
    } else {
        for(let contact of contacts) {
            contact.style.display = 'block';
        }
    }
}