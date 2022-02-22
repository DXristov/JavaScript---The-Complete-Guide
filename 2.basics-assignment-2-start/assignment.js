const task3Element = document.getElementById('task-3');

function showAlert(){
    alert("Hello!");
}

function showName(firstName){
    alert(firstName);
}

function getPersonalInfo(firstName, lastName, age){
    let personalInfo = firstName + lastName + age;
    return personalInfo;
}

getPersonalInfo();
let combinedPersonalInfo = getPersonalInfo("Denis", "Hristov", "22");

showName("Denis");
alert(combinedPersonalInfo);

task3Element.addEventListener('click', showAlert);
