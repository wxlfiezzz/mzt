const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');
const slider4 = document.getElementById('slider4');
const slider5 = document.getElementById('slider5');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const value3 = document.getElementById('value3');
const value4 = document.getElementById('value4');
const value5 = document.getElementById('value5');

// Обновляем значение для первого ползунка
slider1.addEventListener('input', () => {
    value1.textContent = slider1.value;
});

// Обновляем значение для второго ползунка
slider2.addEventListener('input', () => {
    value2.textContent = slider2.value;
});

slider3.addEventListener('input', () => {
    value3.textContent = slider3.value;
});

slider4.addEventListener('input', () => {
    value4.textContent = slider4.value;
});

slider5.addEventListener('input', () => {
    value5.textContent = slider5.value;
});

// Получаем все ползунки и элементы для отображения суммы и результата
const sliders = document.querySelectorAll('.slider');
const sumDisplay = document.getElementById('sum');
const resultDisplay = document.getElementById('result');

// Функция для расчета суммы и итогового значения
function calculateValues() {
    let total = 0;
    
    // Суммируем значения первых четырех ползунков
    for (let i = 0; i < 4; i++) {
        total += parseInt(sliders[i].value);
    }

    const percentage = parseInt(sliders[4].value); // Получаем значение последнего ползунка
    const additionalValue = (total * percentage) / 100; // Вычисляем процент от суммы первых четырех ползунков
    const result = total + additionalValue; // Итоговое значение

    sumDisplay.textContent = total; // Обновляем отображение суммы первых 4 ползунков
    resultDisplay.textContent = result.toFixed(2); // Обновляем отображение итогового результата
}

// Добавляем обработчик событий для каждого ползунка
sliders.forEach(slider => {
    slider.addEventListener('input', calculateValues); // Вызываем calculateValues при изменении значения ползунка
});

// Вызываем функцию сразу, чтобы отобразить начальные значения
calculateValues();