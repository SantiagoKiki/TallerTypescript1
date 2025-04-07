import { series } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
    var seriesTable = document.getElementById("series-list");
    var averageSeasonsElement = document.getElementById("average-seasons");

    displaySeriesInTable(series);
    var averageSeasons = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = `Seasons average: ${averageSeasons.toFixed(2)}`;
});

function displaySeriesInTable(series) {
    var seriesTable = document.getElementById("series-list");
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${serie.id}</td>
            <td class="serie-name">${serie.name}</td> <!-- Aquí aplicamos la clase 'serie-name' -->
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTable.appendChild(row);
    });
}

function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
