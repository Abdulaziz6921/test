const firstName = document.getElementById("fName"),
	lastName = document.getElementById("lName"),
	signUp = document.querySelector(".signUp"),
	password = document.getElementById("password"),
	confirmPassword = document.getElementById("confirmPassword"),
	form = document.querySelector("form"),
	inputsDiv = document.getElementById("inputs"),
	successDiv = document.querySelector(".success"),
	svg = document.querySelector("svg"),
	btn = document.getElementById("submitBtn");

// Function for shaking
let shake = () => {
	let width = window.innerWidth;
	if (width >= 767) {
		signUp.classList.add("wrong1");
		setTimeout(() => {
			signUp.classList.remove("wrong1");
		}, 500);
	} else {
		signUp.classList.add("wrong2");
		setTimeout(() => {
			signUp.classList.remove("wrong2");
		}, 500);
	}
};

// lastName and fullName validation___________________________
// Function for fullName validation
let fullNameValidation = (e) => {
	let regex = /^[a-zA-Z]([a-zA-Z]){1,35}$/;
	let str = e.target.value;
	if (regex.test(str)) {
		e.target.classList.remove("is-invalid");
		e.target.classList.add("is-valid");
	} else {
		e.target.classList.add("is-invalid");
		shake();
	}
};

firstName.addEventListener("input", (e) => {
	fullNameValidation(e);
});
lastName.addEventListener("input", (e) => {
	fullNameValidation(e);
});

// DOB select options__________________________________________
// year selection
const min = 1900,
	year = document.querySelector(".year");
for (var i = 2016; i >= min; i--) {
	let opt = document.createElement("option");
	opt.value = i;
	opt.innerHTML = i;
	year.appendChild(opt);
}

// month selection
let month = document.querySelector(".month"),
	months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
for (let i = 0; i < months.length; i++) {
	let month_value = months[i];
	let opt = document.createElement("option");
	opt.value = month_value;
	opt.innerHTML = month_value;
	month.appendChild(opt);
}

// day selection
let day = document.querySelector(".day"),
	day_selected = new Date().getDate(); // current day
for (let i = 1; i < 32; i++) {
	let days = i <= 9 ? "0" + i : i;
	let opt = document.createElement("option");
	opt.value = days;
	opt.innerHTML = days;
	day.appendChild(opt);
}

// password validation__________________________________________
// Function for password validation
let passwordValidation = (e) => {
	// let regex = /^[a-zA-Z]([a-zA-Z]){1,35}$/;

	let regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
	let str = e.target.value;
	if (regex.test(str)) {
		e.target.classList.remove("is-invalid");
		e.target.classList.add("is-valid");
	} else {
		e.target.classList.add("is-invalid");
		shake();
	}
};

password.addEventListener("blur", (e) => {
	passwordValidation(e);
});

// Password confirmation________________________________________
// Function for password confirmation
let passwordConfirmation = (e) => {
	let confirmValue = e.target.value;
	let passwordValue = password.value;
	if (passwordValue === confirmValue) {
		e.target.classList.remove("is-invalid");
		e.target.classList.add("is-valid");
	} else {
		e.target.classList.add("is-invalid");
		shake();
	}
};

confirmPassword.addEventListener("blur", (e) => {
	passwordConfirmation(e);
});

// formSubmit validationCheck_____________________________________
let oneByOneCheck = () => {
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	let forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(e) => {
				e.preventDefault();
				if (!form.checkValidity()) {
					e.stopPropagation();
					shake();
					// btn shaking
					btn.classList.add("wrong3");
					setTimeout(() => {
						btn.classList.remove("wrong3");
					}, 500);
				} else {
					btn.style.display = "none";
					inputsDiv.style.display = "none";
					successDiv.classList.toggle("d-none");
					successDiv.classList.toggle("d-flex");
					svg.style.display = "none";
					form.reset();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
};
oneByOneCheck();
