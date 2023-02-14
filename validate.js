const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const dob = document.getElementById("dob");
dob.textContent = new Date().getFullYear() - 1996;
console.log(dob, "is this the right age?");
