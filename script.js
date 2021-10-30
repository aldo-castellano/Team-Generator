let list = [];
const nameList = document.querySelector(".listed-names");
const teams = document.querySelector(".teams");

// click event that adds each name to an array and DOM
let addName = function (event) {
    event.preventDefault()
    const names = document.forms["participant"]["names"].value;
    const inputName = document.querySelector(".names")
    if (/[a-zA-Z]/.test(names) && (list.includes(names) === false)) {
        list.push(names);
        printNames(list, nameList);
    }

    inputName.value = '';

}

// prints the names in the list of names
let printNames = function (text, target) {
    nameList.innerHTML = '';
    text.forEach(element => {
        let divListName = document.createElement('div');
        divListName.classList.add("list-name-container");

        target.appendChild(divListName);

        let nameOfList = document.createElement('li');
        nameOfList.classList.add("names-list");
        nameOfList.innerHTML = element;
        divListName.appendChild(nameOfList);

        printDeleteButton(divListName)
    });




}
// prints the trash icon container
let printDeleteButton = target => {
    let btnContainer = document.createElement('a');
    btnContainer.classList.add("icon-remove");

    target.appendChild(btnContainer);
    btnContainer.addEventListener('click', buttonRemoveName);

}
// prints the names on each team
let printNameOnTeam = (text, target) => {

    let nameOfList = document.createElement('li');

    nameOfList.innerHTML = text;
    target.appendChild(nameOfList);
}

// generates the team number, the containers of each team and assigns each name to each team
let generatorTeams = sizeTeam => {

    const numberOfTeams = list.length / sizeTeam;
    let copyArr = [...list];
    let i = 0

    while (i < numberOfTeams) {

        if (copyArr.length > 1) {
            let team = document.createElement('ol');
            team.classList.add("team");
            teams.appendChild(team);

            let nameTeam = document.createElement('h3');
            nameTeam.innerHTML = `Equipo ${i + 1}`;
            team.appendChild(nameTeam);

            for (let j = 0; j < sizeTeam; j++) {
                let random = Math.floor((Math.random() * copyArr.length) + 0);

                if (copyArr[random] !== undefined) {

                    printNameOnTeam(`${copyArr[random]}`, team);

                }

                copyArr.splice(random, 1);
            }

        } else {
            const allTeamContainers = document.querySelectorAll('.team');

            return printNameOnTeam(`${copyArr[0]}`, allTeamContainers[allTeamContainers.length - 1]);
        }
        i++
    }


}


// submit event that calls that triggers the team generation
let generator = function (event) {
    event.preventDefault()
    let sizeTeam = document.forms["teamSize"]["size"].value;
    sizeTeam = parseInt(sizeTeam);
    teams.innerHTML = "";

    let alert = document.querySelector(".alert");
    if (sizeTeam <= 1 || /[a-zA-Z]/.test(sizeTeam) || (sizeTeam >= list.length)) {

        return alert.classList.add("invalid")

    } else {
        alert.classList.remove("invalid");
    }

    generatorTeams(sizeTeam);

}

// event click on the trash can icon to remove name
let buttonRemoveName = event => {

    let trashbin = document.querySelectorAll('.icon-remove');

    for (let i = 0; i < trashbin.length; i++) {
        trashbin[i].setAttribute('id', '');
        trashbin[i].setAttribute('id', `${i}`);
    }
    let eventPosition = parseInt(event.target.attributes.id.value);

    deleteName(eventPosition)


}
// removes the name from the list and array
let deleteName = function (position) {

    const allNameContainer = document.querySelectorAll(".list-name-container");
    allNameContainer[position].remove()
    list.splice(position, 1);

}

// paste event so that you can paste a list of names
nameList.addEventListener("paste", function (event) {

    let paste = (event.clipboardData).getData('text').split('\n');

    paste.forEach(element => {
        if (/[a-zA-Z]/.test(element) && (list.includes(element) === false)) {
            list.push(element);
            printNames(list, nameList);
        }

    });
    event.preventDefault();
});

// locks the name list so that only one text can be pasted
nameList.addEventListener("keydown", function (event) {
    let key = event.key;
    let cmd_key = event.metaKey;
    let ctrl_key = event.ctrlKey;
    if ((cmd_key && key == "v") || (ctrl_key && key == "v")) {
        return true;
    } else {
        event.preventDefault();
    }
});
