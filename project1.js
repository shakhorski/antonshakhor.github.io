// function alertValues(elementParameter) {
//     console.log(elementParameter.value);
//     console.log(elementParameter.className);
// }

// var firstNameEl;
// var firstNameId;
// var lastNameEl;
// var lastNameId;
// var addressEl;
// var ladressId;
// var citiesId;
// var citiesEl;
// var hobbiesId;
// var hobbiesEl;
// var avatarWrapperId = 'avatar-wrapper';
// var avatarId = 'avatar';

// firstNameId = 'first-name';
// lastNameId = 'last-name';
// addressId = 'address';
// citiesId = 'cities';
// hobbiesId = 'hobbies';
// avatarId = 'avatar'


// var lastNameEl = document.getElementById(lastNameId);
// var addressEl = document.getElementById(addressId);
// var citiesEl = document.getElementById(citiesId);
// var hobbiesEl = document.getElementById(hobbiesId);
// var avatarWrapperEl = document.getElementById(avatarWrapperId);
// var avatarEl = document.getElementById(avatarId);

// // alertFirstNameValues()
// // alertFirstNameValues()
// debugger;
// alertValues(firstNameEl);
// debugger;
// alertValues(lastNameEl);
// debugger;
// alertValues(citiesEl);
// alertValues(addressEl);
// alertValues(hobbiesEl);
// alertValues(avatarWrapperEl);


// // console.log(lastNameEl.className);
// // console.log(lastNameEl.value);
// // console.log(adressEl.className);
// // console.log(adressEl.value);
// // console.log(firstNameEl.className);
// // console.log(firstNameEl.value);
// // console.log(citiesEl.value);
// // lastNameEl.setAttribute('value', 'Денисёнок');

// lastNameEl.className = 'error-input';

// avatarWrapperEl.src = 'https://st2.depositphotos.com/3110539/7033/v/600/depositphotos_70334905-stock-illustration-dog-samoyed-buddy-puppy-vector.jpg';
// avatarWrapperEl.title = 'ggg';
// avatarEl.innerHTML = '<ul id=\'list\'><li>1</li></ul>';

// function logValue(id) {
//     var el = getEl(id);
//     console.log(el.value);
// }

// function getValue(id) {
//     var el = getEl(id);
//     return el.value;
// }

// function getEl(id) {
//     console.log('fffffffff')
//     var el = document.getElementById(id);
//     return el;
// }

// var firstNameId = 'first-name';
// var lastNameId = 'last-name';

// logValue(firstNameId);
// var value = getValue(lastNameId);
// window.alert(value);


function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInput() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}

var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', addErrorClassToAddress);

function addErrorClassToAddress() {
    addErrorClass('address');
}
