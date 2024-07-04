export default class Cl_DCYT{
constructor(){
this.cont_f= 0;
this.cont_f_a= 0;
this.cont_estudiante= 0;
this.acum_nota= 0.0;
this.aux_mayor= 0;
}
    procesar(e){
this.cont_estudiante++;

if(e.calcularNotaT() > this.aux_mayor)
    this.aux_mayor =  e.calcularNotaT();
    
if (e.sexo === "F"){ //F) Mujer   M)Hombre
    this.cont_f++;
    if(e.calcNotaT >= 48)
    this.cont_f_a++;
    }
 }
    devolverMayor(){
        return this.aux_mayor;
    }
    devolverContFA(){
        return this.cont_f_a;
    }
    prom(){ return this.acum_nota/ this.cont_estudiante;
    }
}