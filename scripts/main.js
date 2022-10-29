import { seriesData } from "./SeriesData.js";
var tableBody = document.getElementById("table-body");
function renderSeries(series) {
    var seassonsCount = 0;
    var seassonsAverageCalc = 0;
    series.forEach(function (s) {
        var tableRow = document.createElement("tr");
        tableRow.innerHTML = "<td>".concat(s.iD, "</td>\n                                <td>").concat(s.name, "</td>\n                                <td>").concat(s.channel, "</td>\n                                <td>").concat(s.seassons, "</td>");
        tableBody.appendChild(tableRow);
        seassonsAverageCalc += s.seassons;
        seassonsCount += 1;
    });
    seassonsAverageCalc /= seassonsCount;
    var seassonsAverage = document.createElement("p");
    seassonsAverage.textContent = "Seassons average: " + seassonsAverageCalc;
    tableBody.appendChild(seassonsAverage);
}
renderSeries(seriesData);
