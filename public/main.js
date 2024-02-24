import * as dateFns from "https://unpkg.com/date-fns@3.3.1/index.mjs";

const weekDay = document.querySelector("#weekday");
const weekNr = document.querySelector("#week-nr");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const sl = document.querySelector("iframe");

setInterval(() => {
    const now = new Date();
    weekDay.innerText = now.toLocaleString("sv-SE", { timeZone: "Europe/Stockholm", weekday: "long" });
    weekNr.innerText = dateFns.getWeek(now, { weekStartsOn: 1 });
    date.innerText = now.toLocaleString("sv-SE", { timeZone: "Europe/Stockholm", day: "numeric", month: "long", year: "numeric" });
    time.innerText = now.toLocaleString("sv-SE", { timeZone: "Europe/Stockholm", hour: "numeric", minute: "numeric", second: "numeric" });

    const url = "https://sl.datasektionen.se";
    const paths = ["/metro", "/tram", "/bus"];
    const i = Math.floor(now.getSeconds() / 10) % paths.length;
    const src = url + paths[i]
    if (sl.src != src) {
        if (document.startViewTransition)
            document.startViewTransition(() => sl.src = src);
        else
            sl.src = src;
    }
}, 1000);
