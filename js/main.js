const btn = document.getElementById('btn');
btn.onclick = function() {
    var ayuno = parseInt(document.getElementById('ayuno').value);
    var hora = parseInt(document.getElementById('hora').value);
    var op = ayuno + hora;
    var ro = op - 24;
    var am = " A.M";
    var pm = " P.M";
    if (op <= 24 && ayuno == 12) {
        var op2 = 24 - op;
    } else {
        if (op >= 25 && ayuno == 12) {
            var op2 = op - 24;
        } else {
            if (op <= 24 && ayuno == 16) {
                var op2 = 24 - op;
            } else {
                if (op >= 25 && ayuno == 16) {
                    var op2 = op - 24;
                } else {
                    if (op <= 24 && ayuno == 18) {
                        var op2 = 24 - op;
                    }
                    if (op >= 25 && ayuno == 18) {
                        var op2 = op - 24;
                    }
                }
            }
        }
    }
    if (ro <= 12) {
        var ap = am;
    } else {
        if (ro >= 13) {
            var ap = pm;
        }
    }
    document.getElementById("resultado").innerHTML = "Tu proxima comida sera a las:  " + op2 + ap;

    //condicional
}

const button = document.getElementById('button');
button.onclick = function() {
    window.location.href = "old/index.html";
}
