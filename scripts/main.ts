import { Serie } from "./Serie";
import { seriesData } from "./SeriesData";

const tableBody: HTMLElement = document.getElementById("table-body")!;
let seassonsCount = 0;

function renderSeries(series: Serie[]): void{
    let seassonsAverageCalc = 0;
    series.forEach(
        s => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML =    `<td>${s.iD}</td>
                                <td'>${s.name}</td><
                                <td>${s.channel}</td>
                                <td>${s.seassons}</td>
                                <button id=${s.iD}>View</button>`;
        tableBody.appendChild(tableRow);
        seassonsAverageCalc += s.seassons;
        seassonsCount += 1;
        }
    );
    seassonsAverageCalc /= seassonsCount;
    let seassonsAverage = document.createElement("p");
    seassonsAverage.textContent = "Seassons average: " + seassonsAverageCalc;
    tableBody.appendChild(seassonsAverage);
    setEventListenners();
}

function renderDetail(serieID: String, series: Serie[]){
    let serie:Serie = series[0];
    series.forEach(element => {
        if(element.iD.toString() == serieID){
            serie = element;
        }
    });
    document.getElementById("card")!.setAttribute("style", "width: 18rem; opacity: 1;")
    document.getElementById("card-picture")!.setAttribute("src", `${serie.picture}`)
    document.getElementById("card-title")!.textContent=`${serie.name}`
    document.getElementById("card-text")!.textContent=`${serie.information}`;
    document.getElementById("card-link")!.setAttribute("href", `${serie.website}`);
}

function setEventListenners(): void{
    for(let n = 1; n<=seassonsCount; n++){
        document.getElementById(n.toString())!.addEventListener('click', function handleClick(event){renderDetail(n.toString(), seriesData)})
        document.getElementById(n.toString())!.setAttribute("style" , "background-color: gray; border: none; border-radius: 5px; margin: 5px; onmouseover: color=red;");
        document.getElementById(n.toString())!.setAttribute("onmouseover", "this.style.color='rgb(143, 143, 143)'");
        document.getElementById(n.toString())!.setAttribute("onmouseout", "this.style.color='black'");
    }
}

renderSeries(seriesData);

