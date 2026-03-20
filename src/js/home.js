import {data} from "../assets/data/data.js";
import {monthNameToNumber} from "../utils/helper.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const [_, figureElement, timeElement, homeTime, calendarAnchor] = homeContainer.children;

    const generateFigureContent = ({host}) => {
        return `
            <img src="${host.image}" alt="host image">
            <figcaption>${host.name}</figcaption>`;
    };

    const generateTimeContent = ({time}) => {
        const {year, month, date, day} = time.event;
        return `
        <time datetime="${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}">
            ${day}, ${date} ${month} ${year}
        </time>`;
    };

    const generateCountdownMarkup = (days, hours, minutes, seconds) => {
        return `<div>
                    <p>${days}<br><span>Days</span></p>
                </div>
                <div>
                    <p>${hours}<br><span>Hours</span></p>
                </div>
                <div>
                    <p>${minutes}<br><span>Minutes</span></p>
                </div>
                <div>
                    <p>${seconds}<br><span>Seconds</span></p>
                </div>`;
    };

    const updateCountdown = (endTime, homeTime) => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(intervalId);
            homeTime.innerHTML = generateCountdownMarkup(0, 0, 0, 0);
        } else {
            homeTime.innerHTML = generateCountdownMarkup(days, hours, minutes, seconds);
        }
    };

    const startCountdown = (homeTime, timeData) => {
        const {year, month, date} = timeData.event;
        const endTime = new Date(`${String(year)}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}T00:00:00`);

        updateCountdown(endTime, homeTime);
        setInterval(() => updateCountdown(endTime, homeTime), 1000);
    };

    const initializeHome = () => {
        const {host, time, link} = data;
        figureElement.innerHTML = generateFigureContent({host});
        timeElement.innerHTML = generateTimeContent({time});
        calendarAnchor.href = link.calendar;
        startCountdown(homeTime, time);
    };

    initializeHome();
};
