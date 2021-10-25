let nameList = document.getElementsByClassName("listed-names");
let names = document.getElementById("names");
let teamsCreated = document.getElementsByClassName("teams-created");
let listedName = [];
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

let addName = function () {
    if (/[a-zA-Z]/.test(names.value)) {
        listedName.push(names.value);
        printNames(names.value, nameList);
    }

    names.value = '';


}

let printNames = function (text, target) {


    let nameOfList = document.createElement('p');
    nameOfList.classList.add("names-list");
    nameOfList.innerHTML = text;

    target.appendChild(nameOfList);


}
