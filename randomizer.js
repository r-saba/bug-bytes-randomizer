function _randomizeNames() {
    let names = ["Ragith", "Ritchelle", "Cindy", "Cristian", "Leo", "Yun Shi", "Jimmy", "Jonathan", "Omar"];
    return names.sort(() => Math.random() - 0.5);
}

function makeList() {
    randomNames = _randomizeNames();
    let listElement = document.createElement("ol");

    randomNames.forEach(name => {
        let listItem = document.createElement('li');
        listItem.innerHTML = name;
        listElement.appendChild(listItem);
    });
    document.getElementsByClassName('name-list')[0].appendChild(listElement)
}

document.onload = makeList();