import { renderOneXPerson } from '../render-utils.js';
import { fetchOneXPerson } from '../fetch-utils.js';

const mainSection = document.getElementById('display-section');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const xMenID = data.get('id');
    const oneXPerson = await fetchOneXPerson(xMenID);
    const displaySelected = renderOneXPerson(oneXPerson);
    mainSection.append(displaySelected);
}); 