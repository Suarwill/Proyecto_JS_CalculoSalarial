function calcularSalario () {
    var sueldoBruto = document.getElementById("sueldoBase").value;
    var gratificacion = document.getElementById("gratificacion").value;
    var bonoMov = document.getElementById("bonoMovilizacion").value;
    var bonoCol = document.getElementById("bonoColacion").value;
    var afp = document.getElementById("afp").value;
    var prevision = document.getElementById("prevision").value;
    var contrato = document.getElementById("tipocontrato").value;

    var sueldoLiquido = sueldoBruto
    var noImponibles = parseFloat(bonoMov) + parseFloat(bonoCol)

    console.log(sueldoBruto)
    console.log(gratificacion)
    console.log(bonoMov)
    console.log(bonoCol)
    console.log(afp)
    console.log(prevision)
    console.log(contrato)

    console.log(sueldoLiquido)
    console.log(noImponibles)
}
