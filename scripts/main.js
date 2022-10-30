import { seriesData } from "./SeriesData.js";
var tableBody = document.getElementById("table-body");
var seassonsCount = 0;
function renderSeries(series) {
    var seassonsAverageCalc = 0;
    series.forEach(function (s) {
        var tableRow = document.createElement("tr");
        tableRow.innerHTML = "<td>".concat(s.iD, "</td>\n                                <td'>").concat(s.name, "</td><\n                                <td>").concat(s.channel, "</td>\n                                <td>").concat(s.seassons, "</td>\n                                <button id=").concat(s.iD, ">View</button>");
        tableBody.appendChild(tableRow);
        seassonsAverageCalc += s.seassons;
        seassonsCount += 1;
    });
    seassonsAverageCalc /= seassonsCount;
    var seassonsAverage = document.createElement("p");
    seassonsAverage.textContent = "Seassons average: " + seassonsAverageCalc;
    tableBody.appendChild(seassonsAverage);
    setEventListenners();
}
function renderDetail(serieID, series) {
    var serie = series[0];
    series.forEach(function (element) {
        if (element.iD.toString() == serieID) {
            serie = element;
        }
    });
    document.getElementById("card").setAttribute("style", "width: 18rem; opacity: 1;");
    document.getElementById("card-picture").setAttribute("src", "".concat(serie.picture));
    document.getElementById("card-title").textContent = "".concat(serie.name);
    document.getElementById("card-text").textContent = "".concat(serie.information);
    document.getElementById("card-link").setAttribute("href", "".concat(serie.website));
}
function setEventListenners() {
    var _loop_1 = function (n) {
        document.getElementById(n.toString()).addEventListener('click', function handleClick(event) { renderDetail(n.toString(), seriesData); });
        document.getElementById(n.toString()).setAttribute("style", "background-color: gray; border: none; border-radius: 5px; margin: 5px; onmouseover: color=red;");
        document.getElementById(n.toString()).setAttribute("onmouseover", "this.style.color='rgb(143, 143, 143)'");
        document.getElementById(n.toString()).setAttribute("onmouseout", "this.style.color='black'");
    };
    for (var n = 1; n <= seassonsCount; n++) {
        _loop_1(n);
    }
}
renderSeries(seriesData);
