import { Serie } from "./Serie";
import { seriesData } from "./SeriesData";

const tableBody: HTMLElement = document.getElementById("table-body")!;

function renderSeries(series: Serie[]): void{
    let seassonsCount = 0;
    let seassonsAverageCalc = 0;
    series.forEach(
        s => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML =    `<td>${s.iD}</td>
                                <td>${s.name}</td>
                                <td>${s.channel}</td>
                                <td>${s.seassons}</td>`;
        tableBody.appendChild(tableRow);
        seassonsAverageCalc += s.seassons;
        seassonsCount += 1;
        }
    );
    seassonsAverageCalc /= seassonsCount;
    let seassonsAverage = document.createElement("p");
    seassonsAverage.textContent = "Seassons average: " + seassonsAverageCalc;
    tableBody.appendChild(seassonsAverage);
}

renderSeries(seriesData);