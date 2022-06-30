import Chart from 'chart.js/auto';
import { refs } from './refs';

refs.diagramButton.addEventListener('click', () => {
  refs.diagramContainer.classList.toggle('opacityOn');
  setTimeout(() => {
    refs.diagramContainer.classList.toggle('is-hidden');
  }, 500);

  if (refs.diagramContainer.classList.contains('opacityOn')) {
    refs.diagramButtonText.textContent = 'Show Chart';
    refs.diagramButtonImg.style.transform = 'rotate(90deg)';
  }
  if (!refs.diagramContainer.classList.contains('opacityOn')) {
    refs.diagramButtonText.textContent = 'Hide Chart';
    refs.diagramButtonImg.style.transform = 'rotate(-90deg)';
  }
});

const today = new Date();
const firstDay = today.toLocaleDateString();
const secondDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000,
).toLocaleDateString();
const thirdDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000 * 2,
).toLocaleDateString();
const fourthDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000 * 3,
).toLocaleDateString();
const fifthDay = new Date(
  today.getTime() + 24 * 60 * 60 * 1000 * 4,
).toLocaleDateString();

const labels = [firstDay, secondDay, thirdDay, fourthDay, fifthDay];

export function getChart(myData) {
  const createMyChart = '<canvas id="myChart"></canvas>';
  refs.diagramContainer.insertAdjacentHTML('beforeend', createMyChart);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature, C',
        backgroundColor: '#ff6b08',
        borderColor: '#ff6b08',
        data: [
          myData[0].temp_max,
          myData[1].temp_max,
          myData[2].temp_max,
          myData[3].temp_max,
          myData[4].temp_max,
        ],
      },
      {
        label: 'Humidity, %',
        backgroundColor: '#0906ea',
        borderColor: '#0906ea',
        data: [
          myData[0].humidity,
          myData[1].humidity,
          myData[2].humidity,
          myData[3].humidity,
          myData[4].humidity,
        ],
        hidden: true,
      },
      {
        label: 'Wind Speed, m/s',
        backgroundColor: '#eb9b05',
        borderColor: '#eb9b05',
        data: [
          myData[0].speed,
          myData[1].speed,
          myData[2].speed,
          myData[3].speed,
          myData[4].speed,
        ],
        hidden: true,
      },
      {
        label: 'Atmosphere Pressure, m/m',
        backgroundColor: '#057806',
        borderColor: '#057806',
        data: [
          myData[0].pressure,
          myData[1].pressure,
          myData[2].pressure,
          myData[3].pressure,
          myData[4].pressure,
        ],
        hidden: true,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'right',
      },
    },
  };

  const myChart = new Chart(document.getElementById('myChart'), config);
}
