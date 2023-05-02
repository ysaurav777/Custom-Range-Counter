let FromValueEl = document.getElementById("fromUserInput");
let ToValueEl = document.getElementById("toUserInput");
let startBtnEl = document.getElementById("startBtn");
let CounterTextEl = document.getElementById("counterText");

startBtnEl.addEventListener('click', function() {
    if (FromValueEl.value === "") {
        alert("Enter the from value");
    } else if (ToValueEl.value === "") {
        alert("Enter the to value");
    } else {
        From = FromValueEl.value;
        To = ToValueEl.value;
        CounterTextEl.textContent = From;
        let UniqueNo = setInterval(function() {
            From = parseInt(From) + 1;
            CounterTextEl.textContent = From;
            if (parseInt(From) === parseInt(To)) {
                clearInterval(UniqueNo);
            }
        }, 1000);
    }
});