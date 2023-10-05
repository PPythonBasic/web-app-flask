const calCulate = () => {
    let score = document.getElementById("score").value;
    let scoreNumber = parseInt(score);
    if (scoreNumber >= 80 && scoreNumber <= 100) {
        grade = "A";
    }
    else if (scoreNumber >= 75 && scoreNumber <= 79) {
        grade = "B";
    }
    else if (scoreNumber >= 65 && scoreNumber <= 74) {
        grade = "C";
    }
    else if (scoreNumber >= 55 && scoreNumber <= 64) {
        grade = "D";
    }
    else if (scoreNumber >= 50 && scoreNumber <= 54) {
        grade = "E";
    }
    else {
        grade = "F"
    }
    document.getElementById("grade").innerHTML = grade;
}