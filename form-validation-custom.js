const firstName = document.getElementById('first-name');
const lastName = document.getElementById('lastname');
const mail = document.getElementById('email');
const form = document.getElementById('connect-form');
const os = document.getElementById('operating-system');
const employees = document.getElementById('num-of-employees');

let select = document.getElementById('contact-kind');

let valid = false;

const validLength = (input, min) => {
    console.log("validLength");
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
        return true
    } else {
        input.parentElement.classList.add("invalid");
        //e.target.title = "Name must be at least 3 characters long";
        return false;
    }
    console.log(`valid: ${valid}`);
};

const validateEmail = (email) => {
    console.log("validateEmail");
    const re = /\w+@\w+\.\w+/;
    if(re.test(email.value.trim())) {
        email.parentElement.classList.remove("invalid");
        return true;
    } else {
        email.parentElement.classList.add("invalid");
        return false;
    }
}

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;
    if (selectedValue === "business") {
        // build and append to the DOM an input field for number of employees
        employees.parentElement.classList.remove("hidden");
        os.parentElement.classList.add("hidden");
    } else if (selectedValue == "technical") {        
        // build and append to the DOM an input field for OS
        employees.parentElement.classList.add("hidden");
        os.parentElement.classList.remove("hidden");
    }
}

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    console.log("addEventListener");
    // e.preventDevault*()
    if (validLength(firstName, 3) && validLength(firstName, 3) && validateEmail(email)) {
        valid = true;        
    } else {
        valid = false;
        //e.target.title = "Name must be at least 3 characters long";
        e.preventDefault();
        console.log("Bad input");
    }

});

console.log(`test`);