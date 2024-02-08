const male = document.getElementById("Male");
const female = document.getElementById("Female");
const not = document.getElementById("Not");

male.addEventListener("click", function() {
    male.style.background = "#4E4949";
    female.style.background = "linear-gradient(to right, #ED4749, #C70A98)";
    not.style.background = "linear-gradient(to right, #ED4749, #C70A98)";
});

female.addEventListener("click", function() {
    female.style.background = "#4E4949";
    male.style.background = "linear-gradient(to right, #ED4749, #C70A98)";
    not.style.background = "linear-gradient(to right, #ED4749, #C70A98)";
});

not.addEventListener("click", function() {
    not.style.background = "#4E4949";
    male.style.background = "linear-gradient(to right, #ED4749, #C70A98)";
    female.style.background = "linear-gradient(to right, #ED4749, #C70A98)";
});