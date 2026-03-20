import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [eventDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('a');
    const addressParagraph = timeContainer.querySelector('a + p');

    const createTimeItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year}<br>
         ${details.hours.start} – ${details.hours.finish}</p>`
    );

    eventDiv.innerHTML = createTimeItem('Open House', data.time.event);

    mapLink.href = data.link.map;
    addressParagraph.textContent = data.time.address;
    
    addressParagraph.style.cursor = 'pointer';
    addressParagraph.addEventListener('click', () => {
        window.open(data.link.map, '_blank');
    });
};
