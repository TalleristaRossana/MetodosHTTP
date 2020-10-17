var labMujeres = [0, 0, 0, 0, 0];
var labHombres = [0, 0, 0, 0, 0];

function calculate() {
  
  var buttonM, elemM, buttonH, elemH;
  for (i=1; i<6; i++) {
    buttonM = 'mujer'+i;
    elemM = document.getElementById(buttonM);
    buttonH = 'hombre'+i;
    elemH = document.getElementById(buttonH);
    if (elemM.checked == true) { labMujeres[i-1] = Number(elemM.value); }
    if (elemH.checked == true) { labHombres[i-1] = Number(elemH.value); }
  }
  
}
function result(){
  console.log('Labores realizadas por genero: ');
  console.log('Mujeres');
  for(j=0; j<5; j++){
    
    switch(j){
      case 0: 
        console.log('Lavado de los trastes: ');
        break;
      case 1:
        console.log('Limpieza de la casa: ');
        break;
      case 2: 
        console.log('Cocinar');
        break;
      case 3:
        console.log('Planchar');
        break;
      case 4:
        console.log('Ir al super');
        break;
      default:
        console.log('Algo no anda bien');
    }
    console.log(labMujeres[j]);
  }
  console.log('Hombres');
  for(k=0; k<5; k++){
    switch(k){
      case 0: 
        console.log('Lavado de los trastes: ');
        break;
      case 1:
        console.log('Limpieza de la casa: ');
        break;
      case 2: 
        console.log('Cocinar');
        break;
      case 3:
        console.log('Planchar');
        break;
      case 4:
        console.log('Ir al super');
        break;
      default:
        console.log('Algo no anda bien');
    }
    console.log(labHombres[k]);
  }
}

