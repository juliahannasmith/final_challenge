function checkPrime(number) {
    if ((number) <= 1 || (number) != Math.floor(number)) {
        return "not prime"
    }
    for (i = 2; i <= (number) / 2; i++) {
        if ((number) % i == 0) {
            return "not prime";
        }
    }
    return "prime";
}

function timesTable(number) {
    document.write("<table border = 1");
    for (i = 1; i < number + 1; i++) {
        document.write("<tr>");
        for (j = 1; j < number + 1; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function primeTable(number) {
    document.write("<table border = 1");
    for (i = 1; i < number + 1; i++) {
        document.write("<tr>");
        for (j = 1; j < number + 1; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
