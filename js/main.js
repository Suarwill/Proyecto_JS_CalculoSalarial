function calcularSalario () {
    var sueldoBruto = parseInt(document.getElementById("sueldoBase").value)
    var gratificacion = document.getElementById("gratificacion").value
    if (gratificacion != "no") {
        montoGratificacion = calcularGratificacion(sueldoBruto)
    }
    var bonoMov = parseInt(document.getElementById("bonoMovilizacion").value)
    var bonoCol = parseInt(document.getElementById("bonoColacion").value)
    var afp = parseFloat(document.getElementById("afp").value).toFixed(2) / 100
    var prevision = document.getElementById("prevision").value
    var contrato = document.getElementById("tipocontrato").value

    var sueldoImponible = sueldoBruto + montoGratificacion + bonoMov + bonoCol
    var descuentosLegales = (sueldoImponible * ((afp+10)/100)) + (sueldoImponible * 0.07) 
    var sueldoLiquido = sueldoImponible - descuentosLegales

    console.log("Su Sueldo es de $ " + sueldoLiquido)
}
function calcularGratificacion (sueldoBruto) {
    iMM =  450000     // Ingreso minimo mensual
    topeIMM = iMM * 4.75
    topeSalarial = (sueldoBruto * 12) / 4
    if (topeSalarial > topeIMM) {
        montoGratificacion = topeIMM / 12
    }
    else {
        montoGratificacion = topeSalarial / 12
    }
    return montoGratificacion   
}