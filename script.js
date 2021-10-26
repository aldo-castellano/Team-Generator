let formContainer = document.querySelector('.participant');
let names = document.querySelector('#name');
let listsName = [];


formContainer.addEventListener('submit', function (e) {
    e.preventDefault()
    listsName.push(names.value)
    names.value = '';

})

