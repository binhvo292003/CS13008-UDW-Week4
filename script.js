const first = document.getElementById("first-number");
const second = document.getElementById("second-number");
const errorMessage = document.getElementById("error-message");
const resultOut = document.getElementById("result");
const buttonResult = document.getElementById("button-result");
const buttonClear = document.getElementById("button-clear");

document.addEventListener("DOMContentLoaded", function () {
    if (buttonResult) {
        buttonResult.addEventListener("click", calculate);
    }
    if (buttonClear) {
        buttonClear.addEventListener("click", clear);
    }
});

function calculate() {
    if (isEmpty(first.value)) {
        if (errorMessage) {
            errorMessage.textContent = "Nhập số thứ nhất";
        }
        return;
    } else if (isEmpty(second.value)) {
        if (errorMessage) {
            errorMessage.textContent = "Nhập số thứ hai";
        }
        return;
    }
    if (!isNumeric(first.value)) {
        if (errorMessage) {
            errorMessage.textContent = "Số thứ nhất không hợp lệ";
        }
        return;
    } else if (!isNumeric(second.value)) {
        if (errorMessage) {
            errorMessage.textContent = "Số thứ hai không hợp lệ";
        }
        return;
    }
    const firstNumber = parseFloat(first.value);
    const secondNumber = parseFloat(second.value);
    let result;

    if (errorMessage) {
        errorMessage.textContent = "";
    }

    const selectedOperation = document.querySelector(
        'input[name="operator"]:checked'
    );

    if (selectedOperation) {
        const operation = selectedOperation.value;
        switch (operation) {
            case "PLUS":
                result = firstNumber + secondNumber;
                break;
            case "MINUS":
                result = firstNumber - secondNumber;
                break;
            case "MULTIPLY":
                result = firstNumber * secondNumber;
                break;
            case "DIVISION":
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    if (errorMessage) {
                        errorMessage.textContent = "Số thứ hai phải khác 0";
                    }
                    return;
                }
                break;
            default:
                if (errorMessage) {
                    errorMessage.textContent = "Chọn phép tính";
                    return;
                }
        }

        // Display the result
        if (result !== undefined) {
            resultOut.value = result.toString();
        }
    } else {
        if (errorMessage) {
            errorMessage.textContent = "Chọn phép tính";
        }
    }
}

function isEmpty(str) {
    return !str.trim().length;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function clear() {
    first.value = "";
    second.value = "";
    resultOut.value = "";
    errorMessage.textContent = "";
    const radioButtons = document.querySelectorAll('input[name="operator"]');
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });
}
