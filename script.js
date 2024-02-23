
let textColorToggle = false;
let textInput = document.getElementById('textInput');
let changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', function () {
    if (!textColorToggle) {
        textInput.value = 'текстовое поле';
    } else {
        textInput.style.color = textInput.style.color === 'red' ? 'blue' : 'red';
    }

    textColorToggle = !textColorToggle;
});



let resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function () {
    let multilineText = document.getElementById('multilineText').value;
    let searchString = prompt('Введите строку:');
    if (multilineText.includes(searchString)) {
        alert('Строка есть');
    } else {
        alert('Строка не найдена.');
    }
});



let myForm = document.getElementById('myForm');
let submitBtn = document.querySelector('input[type="submit"]');
let resultDiv = document.getElementById('result');

myForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    let radioValue = document.querySelector('input[name="colorOption"]:checked');
    // возвращает 1 элемент селектора
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let selectValue = document.getElementById('dependentSelect').value;

    resultDiv.innerHTML = '';

    if (radioValue) {
        resultDiv.innerHTML += `Переключатель: ${radioValue.value}<br>`;
    } else {
        resultDiv.innerHTML += '<span class="error">Необходимо выбрать переключатель</span><br>';
    }

    if (checkboxes.length > 0) {
        resultDiv.innerHTML += 'Флажки: ';
        checkboxes.forEach(function (checkbox) {
            resultDiv.innerHTML += `${checkbox.value}, `;
            // индификатор
        });
        resultDiv.innerHTML = resultDiv.innerHTML.slice(0, -2) + '<br>';
    } else {
        resultDiv.innerHTML += '<span class="error">Необходим хотя бы один флажок</span><br>';
    }

    if (selectValue) {
        resultDiv.innerHTML += `Выпадающий список: ${selectValue}<br>`;
    } else {
        resultDiv.innerHTML += '<span class="error">Необходим элемент в выпадающем списке</span><br>';
    }

    resultDiv.style.display = 'block';
});



let createAndClickBtn = document.getElementById('createAndClickBtn');

createAndClickBtn.addEventListener('click', function () {
    submitBtn.dispatchEvent(new MouseEvent('click'));
});