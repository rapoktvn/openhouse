import {data} from "../assets/data/data.js";
import {renderElement} from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');

    const hostListItem = (host) => (
        `<li data-aos="zoom-in" data-aos-duration="1000">
              <figure>
                   <img src=${host.image} alt="${host.name}">
                   <figcaption>${host.name}</figcaption>
              </figure>
        </li>`
    );

    const hostData = [data.host];
    renderElement(hostData, brideCouple, hostListItem);
}