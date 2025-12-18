let currentMonth = 0; // Начальный месяц (0 - январь)
let currentYear = 2026; // Фиксируем год
 
const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
 
const monthYearElement = document.getElementById('monthYear');
const calendarBody = document.querySelector('#calendarTable tbody');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');
 
// Функция для генерации и отображения календаря
function displayCalendar(month, year) {
   calendarBody.innerHTML = ''; // Очищаем предыдущее содержимое
   monthYearElement.textContent = ${monthNames[month]} ${year};
