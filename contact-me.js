const fullname = document.getElementById('name');
const email = document.getElementById('email');
const jobTitle = document.getElementById('job-title');
const companyUrl = document.getElementById('company-url');
const codingLanguage = document.getElementById('coding-language-kind');
const form = document.getElementById("contact-me-form");
let message = document.getElementById('message');
let reasonSelect = document.getElementById('reason-kind');

const validLength = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
        return true
    } else {
        input.parentElement.classList.add("invalid");
        //e.target.title = "Name must be at least 3 characters long";
        return false;
    }    
};

const validateEmail = (email) => {
    const re = /\w+@\w+\.\w+/;
    if(re.test(email.value.trim())) {
        email.parentElement.classList.remove("invalid");
        return true;
    } else {
        email.parentElement.classList.add("invalid");
        return false;
    }
}

form.addEventListener("submit", (e) => {    
    message.value = "";
    if (!validLength(fullname, 3)) {
        message.value += "Full name is required and must be at least 3 characters\n";
    }
    if (!validateEmail(email)) {
        message.value += "Email is required and must be valid\n";
    }

    e.preventDefault();
});

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;
    if (selectedValue === "job-opportunity") {
        // build and append to the DOM an input field for number of employees
        jobTitle.parentElement.parentElement.classList.remove("hidden");
        companyUrl.parentElement.parentElement.classList.remove("hidden");
        codingLanguage.parentElement.classList.add("hidden");
    } else if (selectedValue == "talk-code") {        
        // build and append to the DOM an input field for OS
        jobTitle.parentElement.parentElement.classList.add("hidden");
        companyUrl.parentElement.parentElement.classList.add("hidden");
        codingLanguage.parentElement.classList.remove("hidden");
    }
}

reasonSelect.addEventListener("change", () => handleSelect(reasonSelect));