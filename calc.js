function calc() {
    document.getElementById("result").style = "";
    document.getElementById("description").style = "display: none;"

    const Sen = parseFloat(document.getElementById("sen").value) / 100;
    const Spe = parseFloat(document.getElementById("spe").value) / 100;
    const Acc = parseFloat(document.getElementById("acc").value) / 100;

    const infect = 1;
    const nonInfact = 1;

    const Tp = Sen;
    const Fn = infect - Sen;
    const positive = Sen / Acc;

    const Fp = positive - Tp;

    const Tn = - (Spe * Fp) / (Spe - 1);

    const negative = Tn + Fn;

    const ifNegative = Math.floor(Tn * 10000 / negative) / 100;
    const ifPositive = Math.floor(Tp * 10000 / positive) / 100;

    const ifInfect = Math.floor(Fn * 10000 / infect) / 100;
    const ifNotInfect = Math.floor(Fp * 10000 / nonInfect) / 100;

    document.getElementById("ifn").textContent = ifNegative;
    document.getElementById("ifp").textContent = ifPositive;
    document.getElementById("ifi").textContent = ifInfect;
    document.getElementById("ifni").textContent = ifNotInfect;
};
