let list = [];
const nameList = document.querySelector(".listed-names"); //this is the target, where I want the new names to go
const inputName = document.querySelector(".names")

const teams = document.querySelector(".teams");
// let btnDelate = document.querySelector

// console.log(teams)

//Me esta generando el array pero no me esta incluyendo los valores. No se si estoy asignando mal las clases
let addName = function (event) {
    event.preventDefault()
    const names = document.forms["participant"]["names"].value;

    if (/[a-zA-Z]/.test(names) && (list.includes(names) === false)) {
        list.push(names);
        printNames(names, nameList);
    }

    inputName.value = '';

}


let printNames = function (text, target) {


    let divListName = document.createElement('div');
    divListName.classList.add("list-name-container");

    target.appendChild(divListName);

    let nameOfList = document.createElement('li');
    nameOfList.classList.add("names-list");
    nameOfList.innerHTML = text;
    divListName.appendChild(nameOfList);


    printDelateBoton(divListName)



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
            let teamsRemove = document.querySelectorAll('.team');

            return printNameTeam(`${copyArr[0]}`, teamsRemove[teamsRemove.length - 1]);
        }
        i++
    }


}



let generator = function (event) {
    event.preventDefault()
    let sizeTeam = document.forms["teamSize"]["size"].value;
    sizeTeam = parseInt(sizeTeam);
    teams.innerHTML = "";
    let invalid = document.querySelector("#alert").classList.add("invalid");

    if (sizeTeam <= 0 || /[a-zA-Z]/.test(sizeTeam) || (sizeTeam >= list.length)) {

        return invalid

    } else {
        document.querySelector("#alert").classList.remove("invalid");
        console.log(typeof sizeTeam)
        generatorTeams(sizeTeam)

    }




}

let lista = function (a) {

    a.addEventListener('click', function (e) {

        // hola.id = ""
        let hola = document.querySelectorAll('.gola');

        for (let i = 0; i < hola.length; i++) {
            hola[i].setAttribute('id', '');
            hola[i].setAttribute('id', `${i}`);
        }

        let chao = parseInt(e.target.attributes.id.value);


        console.log(chao)
        delate(chao)





    })
}

let delate = function (position) {
    const div = document.querySelectorAll(".list-name-container");
    console.log(position)

    div[position].remove()
    list.splice(position, 1);

}
let printDelateBoton = function (target) {
    let btnContainer = document.createElement('div');
    btnContainer.classList.add("gola");

    target.appendChild(btnContainer);

    lista(btnContainer)
}