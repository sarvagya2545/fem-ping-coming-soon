var inputVal = document.querySelectorAll("#email")[0];
var errStatement = document.querySelectorAll(".err-stat")[0];
var submit = document.querySelector("button");

submit.addEventListener('click', function (event) {
    event.preventDefault();
    var val = inputVal.value;
    if (!validateEmail(val)) {
        errStatement.classList.remove("non-err");
        errStatement.classList.add("err");
        inputVal.classList.add("err-box");
    } else {
        errStatement.classList.add("non-err");
        errStatement.classList.remove("err");
        inputVal.classList.remove("err-box");  
        alert("Thank You!");
    }
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}