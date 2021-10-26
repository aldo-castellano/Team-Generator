let nameList = document.getElementsByClassName("listed-names"); //this is the target, where I want the new names to go
let names = document.forms["participant"]["names"].value;
let teamsCreated = document.getElementsByClassName("teams-created");
let list = [];
let teams = document.getElementsByClassName("teams")
let addParticipant = document.getElementsByClassName("add-participant")
let selectSize = document.getElementsByClassName("team-size")


/* loop through an array and generate a copy since the splice () 
method used in printList () removes a common copy and also 
removes the original array */

let copyArray = function (array) {
    let copy = [];
    for (e of array) {
        copy.push(e);
    }
    return copy
}

//Me esta generando el array pero no me esta incluyendo los valores. No se si estoy asignando mal las clases
let addName = function () {
    if (/[a-zA-Z]/.test(names)) {
        list.push(names);
        printNames(names, nameList);
    }

    return names = '';


}

let printNames = function (text, target) {


    let nameOfList = document.createElement('li');
    nameOfList.classList.add("names-list");
    nameOfList.innerHTML = text;

    target.appendChild(nameOfList);


}
