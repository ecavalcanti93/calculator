let resultField = document.querySelector("#result");

function screen(num){
    resultField.value += num;
}

function clearScreen() {
    resultField.value = "";
}

function result() {
    try {
        let result = math.evaluate(resultField.value);
        resultField.value = result;
    } catch (e) {
        resultField.value = "Error";
    }
}