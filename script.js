// Selecciona el campo de resultado donde se mostrarán los números y resultados
const resultField = document.querySelector('.result');
// Selecciona todos los botones numéricos usando su clase
const numberButtons = document.querySelectorAll('.boton_numero');
// Selecciona todos los botones de operadores usando su clase
const operatorButtons = document.querySelectorAll('.boton_operador');
// Selecciona el botón de limpiar usando su ID
const clearButton = document.querySelector('#clear');
// Selecciona el botón de igual usando su clase
const equalButton = document.querySelector('.boton_resultado');


// Agrega eventos a los botones numéricos
numberButtons.forEach(button => {
    // Por cada botón numérico, agrega un event listener para el evento 'click'
    button.addEventListener('click', () => {
        // Cuando el botón es clickeado, agrega su contenido (el número) al campo de resultado
        resultField.value += button.textContent;
    });
});

// Agrega eventos a los botones de operadores
operatorButtons.forEach(button => {
    // Por cada botón de operador, agrega un event listener para el evento 'click'
    button.addEventListener('click', () => {
        // Cuando el botón es clickeado, agrega el operador y un espacio antes y después en el campo de resultado
        resultField.value += ' ' + button.textContent + ' ';
    });
});

// Agrega funcionalidad al botón '=' para calcular el resultado
equalButton.addEventListener('click', () => {
    try {
        // Intenta evaluar la expresión matemática en el campo de resultado
        const result = eval(resultField.value);
        // Muestra el resultado en el campo de resultado
        resultField.value = result;
    } catch (error) {
        // Si ocurre un error (por ejemplo, la expresión es inválida), muestra 'Error'
        resultField.value = 'Error';
    }
});

// Agrega funcionalidad al botón 'C' para limpiar el campo de resultado
clearButton.addEventListener('click', () => {
    // Cuando el botón es clickeado, borra el contenido del campo de resultado
    resultField.value = '';
});
