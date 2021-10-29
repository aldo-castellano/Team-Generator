let list = [];
const nameList = document.querySelector(".listed-names"); //this is the target, where I want the new names to go
const inputName = document.querySelector(".names")
const teams = document.querySelector(".teams");
let allTeamContainers = document.querySelectorAll('.team');
let alert = document.querySelector(".alert");


let addName = function (event) {
    event.preventDefault()
    const names = document.forms["participant"]["names"].value;

    if (/[a-zA-Z]/.test(names) && (list.includes(names) === false)) {
        list.push(names);
        printNames(list, nameList);
    }

    inputName.value = '';

}


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
let printDeleteButton = function (target) {
    let btnContainer = document.createElement('div');
    btnContainer.classList.add("icon-remove");

    target.appendChild(btnContainer);
    btnContainer.addEventListener('click', buttonRemoveName);

}
let printNameTeam = function (text, target) {

    let nameOfList = document.createElement('li');

    nameOfList.innerHTML = text;
    target.appendChild(nameOfList);
}


let generatorTeams = function (sizeTeam) {

    const numberOfTeams = list.length / sizeTeam;
    let copyArr = [...list];
    let i = 0

    while (i < numberOfTeams) {

        if (copyArr.length > 1) {
            let team = document.createElement('div');
            team.classList.add("team");
            teams.appendChild(team);

            let nameTeam = document.createElement('h3');
            nameTeam.innerHTML = `Equipo ${i + 1}`;
            team.appendChild(nameTeam);

            for (let j = 0; j < sizeTeam; j++) {
                let random = Math.floor((Math.random() * copyArr.length) + 0);

                if (copyArr[random] !== undefined) {

                    printNameTeam(`${copyArr[random]}`, team);

                }

                copyArr.splice(random, 1);
            }

        } else {


            return printNameTeam(`${copyArr[0]}`, allTeamContainers[allTeamContainers.length - 1]);
        }
        i++
    }


}



let generator = function (event) {
    event.preventDefault()
    let sizeTeam = document.forms["teamSize"]["size"].value;
    sizeTeam = parseInt(sizeTeam);
    teams.innerHTML = "";


    if (sizeTeam <= 0 || /[a-zA-Z]/.test(sizeTeam) || (sizeTeam >= list.length)) {

        return alert.classList.add("invalid")

    } else {
        alert.classList.remove("invalid");
    }

    generatorTeams(sizeTeam);

}

let buttonRemoveName = event => {

    let trashbin = document.querySelectorAll('.icon-remove');

    for (let i = 0; i < trashbin.length; i++) {
        trashbin[i].setAttribute('id', '');
        trashbin[i].setAttribute('id', `${i}`);
    }
    let eventPosition = parseInt(event.target.attributes.id.value);

    deleteName(eventPosition)


}

let deleteName = function (position) {

    const allNameContainer = document.querySelectorAll(".list-name-container");
    allNameContainer[position].remove()
    list.splice(position, 1);

}


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
