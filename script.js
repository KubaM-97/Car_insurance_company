// in form there are 2 questions about: car`s registration date and driver`s birth date

const dateMainDiv = document.querySelectorAll("div[class$='Date'].singleAnswer")
const buttonSubmitMini = document.querySelector(".insurance_form_mini")


for (let i = 0; i < dateMainDiv.length; i++) {

    const dateInputNumbers = dateMainDiv[i].querySelectorAll("input[type='number']")
    const dateCorrectSpans = dateMainDiv[i].querySelectorAll("span")
    const correctDateAnswer = dateMainDiv[i].querySelector("p[class$='Answer']")

    for (let j = 0; j < dateInputNumbers.length; j++) {
        dateInputNumbers[j].addEventListener("input", function () {

            dateCorrectSpans[j].innerHTML = this.value;

            const resultantYear = dateCorrectSpans[2].innerHTML;
            const resultantMonth = dateCorrectSpans[1].innerHTML - 1;
            const resultantDay = dateCorrectSpans[0].innerHTML;

            const date = new Date(resultantYear, resultantMonth, resultantDay)

            if (!(date.getFullYear() == resultantYear && date.getMonth() == resultantMonth && date.getDate() == resultantDay)) {
                correctDateAnswer.innerHTML = "Proszę wprowadzić prawidłową datę"
            } else {
                correctDateAnswer.innerHTML = ""
            }

        })


        dateInputNumbers[0].addEventListener("change", function () {
            let value = this.value;
            if (value > 31) value = 31
            if (value < 1) value = 1

            correctRegistrationDay.innerHTML = value
        })
        dateInputNumbers[1].addEventListener("change", function () {
            let value = this.value;
            if (value > 12) value = 12
            if (value < 1) value = 1

            correctRegistrationMonth.innerHTML = value
        })
        dateInputNumbers[2].addEventListener("change", function () {
            let value = this.value;
            if (value > 2021) value = 2021
            if (value < 1980) value = 1980

            correctRegistrationYear.innerHTML = value
        })




    }

}


if (buttonSubmitMini) {
    buttonSubmitMini.addEventListener("submit", function (e) {
        e.preventDefault();
        open("insurance.html", "_self")
    })
}
