// let mainTitle = document.getElementById("main_title");
// let titleInput = document.getElementById("title_input");
// let nounInput = document.getElementById("noun");
// let verbInput = document.getElementById("verb");
// let adjectiveInput = document.getElementById("adjective");
// let submitButton = document.getElementById("submit_button");
// let formContainer = document.querySelector(".form_container");
// let storyResult = document.getElementById("story_result");
// function updateTitle() {
//     mainTitle.innerText = titleInput.value;
// }

// titleInput.addEventListener("input", updateTitle);

// function handleSubmit(event) {
//     event.preventDefault();

//     // if (!titleInput.value || !nounInput.value || !verbInput.value || !adjectiveInput.value) {
//     //     alert("Please fill in all fields");
//     // } else {
//         let story = ("Last night I ate a " + nounInput.value + " and today I just had to " + verbInput.value + ". What a " + adjectiveInput.value + " day!");
//         storyResult.innerText = story;

//         // Hide form and display story
//         formContainer.style.display = "none";
//         storyResult.style.display = "inline";

//         mainTitle.innerText = titleInput.value;
//     }
let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let formContainer = document.querySelector(".form_container");
let storyResult = document.getElementById("story_result");

// Update main title as user types
function updateTitle() {
    mainTitle.innerText = titleInput.value;
}

// Validate inputs and create story on submit
function handleSubmit(event) {
    event.preventDefault();

    if (!titleInput.value || !nounInput.value || !verbInput.value || !adjectiveInput.value) {
        alert("Please fill in all fields");
    } else {
        // Create ad-lib story
        let story = "Last night I ate a " + nounInput.value + ", and today I just had to " + verbInput.value + ". What a " + adjectiveInput.value + " day!";
        storyResult.innerText = story;

        // Hide form and display story
        formContainer.style.display = "none";
        mainTitle.innerText = titleInput.value;
    }
}

// Event listeners
titleInput.addEventListener("input", updateTitle);
submitButton.addEventListener("click", handleSubmit);