//used to set our constants that will not change
const saveChanges = document.getElementById("saveChanges")
const addButton = document.getElementById("addButton")
const inputChoices = document.getElementById("inp")
const userLabel = document.getElementById("label")
const userChoices = document.getElementById("currentList")
const userDefault = document.getElementById("defaultchoice")
const userBox = document.getElementById("userCheckBox")
const deleteButton = document.getElementById("deleteButton")

//used to save form data
function saveForm() {
    //inform builder that "Label" input can not be left blank when saved
    if (!userLabel.value) {
        alert("Label field is required!");
    //inform builder that "Default" input can not be left blank when saved
    } else if (!userDefault.value) {
        alert("Create a default!")
    } else {
        //the "optionLabels" array is created to pass in our user choices from the list
        let optionLabels = []
        for (let currentOption of userChoices.options) {
            optionLabels.push(currentOption.label)
            
        }
        //"optionLabels" checks to see the default value and is passed in the choices list when saved
        if (!optionLabels.includes(userDefault.value)){
            let defaultOption = document.createElement("option")
            defaultOption.text = userDefault.value;
            userChoices.add(defaultOption)
        }
        //format json data like MockService.js
        let choiceObject = {
            "label": userLabel.value,
            "default": userDefault.value,
            "required": userBox.checked,
            "choices": optionLabels
        }
        //json data that is converted to a string data and sent to mock API
        fetch("http://www.mocky.io/v2/566061f21200008e3aabd919", 
            {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(choiceObject)
            }
        ).then(response => {
            console.log(response)
        })
    }
}
//our function used to clear the form and reset all values to being empty
function clearForm() {
    userLabel.value = ""
    userDefault.value = ""
    inputChoices.value = ""
    while (userChoices.options.length > 0) {
        userChoices.remove(0);
    }
}
//our function used to add options to the choices list
function addChoices() {
    //builder is alerted they can not pass a blank choice to the list
    if (!inputChoices.value) {
        alert("Choice field is required!")
    //builder is alerted that they cannot pass more than 50 choices in the index
    } else if (userChoices.options.length >= 50){
        alert("Cannot exceed 50 values")
    } else {
        //if both alerts are passed choice will be added to "optionLabels" array
        optionLabels = []
        for (let option of userChoices.options){
            optionLabels.push(option.label)
        }
        //builder is alerted they cannot input a duplicate choice
        if (optionLabels.includes(inputChoices.value)){
            alert("No duplicate values")
        } else {
            //option is created and displayed in our choices list
            let option = document.createElement("option");
            option.text = inputChoices.value;
            userChoices.add(option);
        }
    }
    //resets our choices input back to blank after entering data
    inputChoices.value = ""
}

//delete selected index options from choices list
function deleteChoices() {
    let choiceIndex = userChoices.selectedIndex
    userChoices.remove(choiceIndex);
}

//used to sort our choices alphabetically 
function sortAlphabetically() {
    //option labels are stored as strings in "optionsToSort"
    optionsToSort = []
    //created choices are passed in to OptionToSort array
    for (let currentOption of userChoices.options) {
        optionsToSort.push(currentOption.label)
    }
    //choices are removed from current index on list
    while (userChoices.options.length > 0) {
        userChoices.remove(0);
    }
    //sort() is called on the "OptionsToSort" to be alphabetically arranged
    for (let currentOption of optionsToSort.sort()) {
        let option = document.createElement("option")
        option.text = currentOption
        userChoices.add(option)
    }
}
//our event listeners that are used to interact with the buttons on Field Builder
saveChanges.addEventListener("click", saveForm)
clearChanges.addEventListener("click", clearForm)
addButton.addEventListener("click", addChoices)
deleteButton.addEventListener("click", deleteChoices)
sortButton.addEventListener("click", sortAlphabetically)