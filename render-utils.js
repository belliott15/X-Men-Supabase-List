export function renderXMen(xmen){
    const xMenDivEl = document.createElement('div');
    const anchorTag = document.createElement('a');
    const xMenImgEl = document.createElement('img');
    const nameEl = document.createElement('p');

    anchorTag.href = `./details/?id=${xmen.id}`;
    xMenImgEl.src = xmen.image;
    nameEl.textContent = xmen.name;

    xMenDivEl.classList.add('thumbnail');
    xMenDivEl.append(xMenImgEl, nameEl);
    anchorTag.append(xMenDivEl);

    return anchorTag;
}

export function renderOneXPerson(xmen){
    const xPersonDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const aliasEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const detailsEl = document.createElement('div');
    const birthdayEl = document.createElement('div');
}