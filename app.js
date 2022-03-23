import { renderXMen } from './render-utils.js';
import { fetchXMen } from './fetch-utils.js';
// import functions and grab DOM elements
// const homeBarEl = document.querySelector('#top-section');
// const middleSectionEl = document.querySelector('#middle-section');
const xMenDisplayEl = document.querySelector('#bottom-section');
// let state

// set event listeners 
window.addEventListener('load', async () => {
    const xMenList = await fetchXMen();

    for (let xmen of xMenList){
        const xmenDisplayed = renderXMen(xmen);
        xMenDisplayEl.append(xmenDisplayed);
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
