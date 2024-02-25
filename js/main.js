function calcularSalario () {
    var sueldo = document.getElementById("sueldoBase").value;
    var gratificacion = document.getElementById("gratificacion").value;
    if (!gratificacion.checked) {
        gratificacion.value = "no";
    }
    var bonoMov = document.getElementById("bonoMovilizacion").value;
    var bonoCol = document.getElementById("bonoColacion").value;
    var afp = document.getElementById("afp").value;
    var prevision = document.getElementById("prevision").value;
    var contrato = document.getElementById("tipocontrato").value;
    console.log(sueldo)
    console.log(gratificacion)
    console.log(bonoMov)
    console.log(bonoCol)
    console.log(afp)
    console.log(prevision)
    console.log(contrato)
}
