const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const calendar = document.querySelector(".calendar");

const today = new Date();
let current = today;
const month = [
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

function changeMonth(event) {
    const button = event.target.classList;
    let newCalendar;

    if (button.contains("prev")) {
        if (current.getMonth() + 1 === 1) {
            newCalendar = new Date(current.getFullYear() - 1, 11);
        } else {
            newCalendar = new Date(
                current.getFullYear(),
                current.getMonth() - 1
            );
        }
    } else {
        if (current.getMonth() + 1 === 12) {
            newCalendar = new Date(current.getFullYear() + 1, 0);
        } else {
            newCalendar = new Date(
                current.getFullYear(),
                current.getMonth() + 1
            );
        }
    }

    current = newCalendar;
    makeCalendar();
}

function makeCalendar() {
    const firstDay = new Date(current.getFullYear(), current.getMonth(), 1);
    const lastDay = new Date(current.getFullYear(), current.getMonth() + 1, 0);
    let count = 1;

    removeCalendar();
    makeTitle();

    // week 1 ~ 6
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement("tr");

        // sun ~ sat
        for (let j = 0; j < 7; j++) {
            if (i === 0) {
                if (firstDay.getDay() <= j) {
                    const td = document.createElement("td");
                    td.innerText = count++;
                    tr.appendChild(td);
                } else {
                    const td = document.createElement("td");
                    tr.appendChild(td);
                }
            } else {
                if (count > lastDay.getDate()) {
                    break;
                }

                const td = document.createElement("td");
                td.innerText = count++;
                tr.appendChild(td);
            }
        }

        calendar.appendChild(tr);
    }
}

function removeCalendar() {
    calendar.innerHTML = "";
}

function makeTitle() {
    const title = document.querySelector(".current");
    title.innerText = `${month[current.getMonth()]}, ${current.getFullYear()}`;
}

function main() {
    makeCalendar();
}

main();
prev.addEventListener("click", changeMonth);
next.addEventListener("click", changeMonth);
