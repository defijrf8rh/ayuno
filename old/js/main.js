function ayuno() {
    var hora1 = document.getElementById("hora1").value;
    if (hora1 == 1) {
        document.getElementById("res").innerHTML = "Tu siguiente comida sera las 5 P.M de hoy";
    } else {
        if (hora1 == 2) {
            document.getElementById("res").innerHTML = "Tu siguiente comida sera las 6 P.M de hoy";
        } else {
            if (hora1 == 3) {
                document.getElementById("res").innerHTML = "Tu siguiente comida sera las 7 P.M de hoy";
            } else {
                if (hora1 == 4) {
                    document.getElementById("res").innerHTML = "Tu siguiente comida sera las 8 P.M de hoy";
                } else {
                    if (hora1 == 5) {
                        document.getElementById("res").innerHTML = "Tu siguiente comida sera las 9 P.M de hoy";
                    } else {
                        if (hora1 == 6) {
                            document.getElementById("res").innerHTML = "Tu siguiente comida sera las 10 P.M de hoy";
                        } else {
                            if (hora1 == 7) {
                                document.getElementById("res").innerHTML = "Tu siguiente comida sera las 11 P.M de hoy";
                            } else {
                                if (hora1 == 8) {
                                    document.getElementById("res").innerHTML = "Tu siguiente comida sera las 12 P.M de hoy";
                                } else {
                                    if (hora1 == 9) {
                                        document.getElementById("res").innerHTML = "Tu siguiente comida sera las 1 A.M de mañana";
                                    } else {
                                        if (hora1 == 10) {
                                            document.getElementById("res").innerHTML = "Tu siguiente comida sera las 2 A.M de mañana";
                                        } else {
                                            if (hora1 == 11) {
                                                document.getElementById("res").innerHTML = "Tu siguiente comida sera las 3 A.M de mañana";
                                            } else {
                                                if (hora1 == 12) {
                                                    document.getElementById("res").innerHTML = "Tu siguiente comida sera las 4 A.M de mañana";
                                                } else {
                                                    if (hora1 == 13) {
                                                        document.getElementById("res").innerHTML = "Tu siguiente comida sera las 5 A.M de mañana";
                                                    } else {
                                                        if (hora1 == 14) {
                                                            document.getElementById("res").innerHTML = "Tu siguiente comida sera las 6 A.M de mañana";
                                                        } else {
                                                            if (hora1 == 15) {
                                                                document.getElementById("res").innerHTML = "Tu siguiente comida sera las 7 A.M de mañana";
                                                            } else {
                                                                if (hora1 == 16) {
                                                                    document.getElementById("res").innerHTML = "Tu siguiente comida sera las 8 A.M de mañana";
                                                                } else {
                                                                    if (hora1 == 17) {
                                                                        document.getElementById("res").innerHTML = "Tu siguiente comida sera las 9 A.M de mañana";
                                                                    } else {
                                                                        if (hora1 == 18) {
                                                                            document.getElementById("res").innerHTML = "Tu siguiente comida sera las 10 A.M de mañana";
                                                                        } else {
                                                                            if (hora1 == 19) {
                                                                                document.getElementById("res").innerHTML = "Tu siguiente comida sera las 11 A.M de mañana";
                                                                            } else {
                                                                                if (hora1 == 20) {
                                                                                    document.getElementById("res").innerHTML = "Tu siguiente comida sera las 12 A.M de mañana";
                                                                                } else {
                                                                                    if (hora1 == 21) {
                                                                                        document.getElementById("res").innerHTML = "Tu siguiente comida sera las 13 P.M de mañana";
                                                                                    } else {
                                                                                        if (hora1 == 22) {
                                                                                            document.getElementById("res").innerHTML = "Tu siguiente comida sera las 14 P.M de mañana";
                                                                                        } else {
                                                                                            if (hora1 == 23) {
                                                                                                document.getElementById("res").innerHTML = "Tu siguiente comida sera las 15 P.M de mañana";
                                                                                            } else {
                                                                                                if (hora1 == 24) {
                                                                                                    document.getElementById("res").innerHTML = "Tu siguiente comida sera las 16 P.M de mañana";
                                                                                                } else {
                                                                                                    if (hora1 == 99) {
                                                                                                        document.getElementById("res").innerHTML = "luis vera :)";
                                                                                                    } else {
                                                                                                        document.getElementById("res").innerHTML = "HORA INVALIDA";
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//Bloquear letras
function block(e) {
    key = e.keyCode || e.swich;
    teclado = String.fromCharCode(key);
    numero = "0123456789";
    especiales = "8-37-38-46";
    teclado_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true;
        }
    }
    if (numero.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }
}
const button = document.getElementById('button');
button.onclick = function() {
    window.location.href = "../index.html";
}