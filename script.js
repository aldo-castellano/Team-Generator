let nameList = document.getElementsByClassName("name-list");
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
        printNames(nameList);
    }

    names.value = '';


}
