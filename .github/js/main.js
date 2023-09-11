    const metodoPago = prompt("Ingrese el metodo de pago para Acceder A Los Juegos");

    if (metodoPago == "") {
        alert("Aun no pagaste");
    }
    else {
        alert("Nombre de metodo de pago ingresado");
    }


    switch(metodoPago.toLowerCase()){
        case 'efectivo':
            console.log('Pagaste con ' + metodoPago);
            break;
        case 'cheque': 
            console.log('Pagaste con ' + metodoPago);
            break;
        case 'tarjeta':
            console.log('Pagaste con ' + metodoPago);
            break;
        case 'bitcoin':
            console.log('Pagaste con ' + metodoPago);
            break;
        default:
            console.log("Aun no pagaste");

    }
       
        let imagenes=new Array(
            ['assets/1.jpg','assets/supvszod.html'],
            ['assets/2.jpg','assets/supvszod.html'],
            ['assets/3.jpg','assets/supvszod.html'],
            ['assets/4.jpg','assets/supvszod.html'],
            ['assets/5.jpg','assets/supvszod.html'],
        );
        let contador=0;


        function rotarImagenes()
        {

            contador++
            document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];
            document.getElementById("link").href=imagenes[contador%imagenes.length][1];
        }


        onload=function()
        {

            rotarImagenes();
     

            setInterval(rotarImagenes,4000);
        }



        for(let i=0; i<=1; i+=1){
        if(i == 1){
            continue;
        }
        document.write("<p>Click en Imagen Para Jugar</p>")
    }
        console.log("Termino")




