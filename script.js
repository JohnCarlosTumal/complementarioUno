
alert("Bienvenido a Food and Drinks Online")
alert("selecciona de nuestras entradas: ")
alert("Hamburguesa - Hot dog - Pizza")


let comida, tamaño

do {
    comida = prompt("ingrese su entrada").toLowerCase()

    if(comida == "hamburguesa" || comida == "hot dog" || comida == "pizza"){
        alert("su entrada esta disponible")
    }else{
        alert("entrada no disponible")
        continue
        
    }

    alert("seleccione tamaño entre grande, mediana o pequeña")

    tamaño = prompt("ingrese el tamaño de su entrada").toLowerCase()

    if(tamaño == "grande" || tamaño == "pequeña" || tamaño == "mediana"){
        alert("pedido listo")
    }else{
        alert("el tamaño seleccionado no esta disponible")
        continue
    }


}while((comida !="hamburguesa" && comida != "hot dog" && comida != "pizza") || (tamaño != "grande" && tamaño != "pequeña" && tamaño != "mediana"))

if(comida == "hamburguesa"  && tamaño =="grande"){
    alert("debe cancelar: $ 50.000")
}else if (comida == "hamburguesa"  && tamaño =="pequeña"){
    alert("debe cancelar: $ 30.000")
}else if (comida == "hamburguesa" && tamaño == "mediana"){
    alert("debe cancelar $ 38.000")
}else if (comida == "hot dog"  && tamaño =="grande"){
    alert("debe cancelar: $ 40.000")
}else if (comida == "hot dog"  && tamaño =="pequeña"){
    alert("debe cancelar: $ 15.000")
}else if (comida == "hot dog" && tamaño == "mediana"){
    alert("debe cancelar $ 23.000")
}else if (comida == "pizza"  && tamaño =="grande"){
    alert("debe cancelar: $ 45.000")
}else if (comida == "pizza"  && tamaño =="pequeña"){
    alert("debe cancelar: $ 10.000")
}else if (comida == "pizza" && tamaño == "mediana"){
    alert("debe cancelar $ 18.500")
}









