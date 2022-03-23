export function renderXMen(xmen){
    const xMenDivEl = document.createElement('div');
    const anchorTag = document.createElement('a');
    const xMenImgEl = document.createElement('img');
    const nameEl = document.createElement('p');

    anchorTag.href = `./details/?id=${xmen.id}`;
    xMenImgEl.src = xmen.image;
    nameEl.textContent = xmen.alias;

    xMenDivEl.classList.add('thumbnail');
    xMenDivEl.append(xMenImgEl, nameEl);
    anchorTag.append(xMenDivEl);

    return anchorTag;
}

export function renderOneXPerson(xmen){
    const xPersonDiv = document.createElement('div');
    const nameEl = document.createElement('h2');
    const aliasEl = document.createElement('h2');
    const imgEl = document.createElement('img');
    const detailsEl = document.createElement('div');
    const birthdayEl = document.createElement('p');
    const abilityEl = document.createElement('p');
    const powerLevelEl = document.createElement('p');
    const bioEl = document.createElement('p');
    const affiliationsEl = document.createElement('ul');

    nameEl.textContent = xmen.name;
    aliasEl.textContent = `AKA: ${xmen.alias}`;
    imgEl.src = xmen.image;
    
    birthdayEl.textContent = `DOB: ${xmen.date_of_birth}`;
    abilityEl.textContent = `Main Ability: ${xmen.ability}`;
    powerLevelEl.textContent = `Power Level: ${xmen.power_rating_of_ten}/10`;
    bioEl.textContent = xmen.bio;
    affiliationsEl.textContent = `Teams: `;

    for (let team of xmen.affiliations){
        const li = document.createElement('li');
        li.textContent = team;
        affiliationsEl.append(li);
    }

    detailsEl.append(birthdayEl, abilityEl, powerLevelEl, bioEl, affiliationsEl);
    xPersonDiv.append(nameEl, aliasEl, imgEl, detailsEl);

    return xPersonDiv;
}