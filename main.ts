// main.ts
import { series } from './data';

document.addEventListener("DOMContentLoaded", function () {
  var seriesTable = document.getElementById("series-list");
  var averageSeasonsElement = document.getElementById("average-seasons");
  var averageSeasonsElement = document.getElementById("average-seasons");
  var averageSeasons = calculateAverageSeasons(series);
    if (averageSeasonsElement) {
        averageSeasonsElement.innerHTML = `Seasons average: ${averageSeasons.toFixed(2)}`;
    }


  displaySeriesInTable(series);
  if (averageSeasonsElement) {
        averageSeasonsElement.innerHTML = `Seasons average: ${averageSeasons.toFixed(2)}`;
    }
});

function displaySeriesInTable(series: any[]) {
  var seriesTable = document.getElementById("series-list");
  series.forEach(function (serie) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    if (seriesTable) {
        seriesTable.appendChild(row);
    }
  });
}


function calculateAverageSeasons(series: any[]) {
  var totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
  return totalSeasons / series.length;
}
