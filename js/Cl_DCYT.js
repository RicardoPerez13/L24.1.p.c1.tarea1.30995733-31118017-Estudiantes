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

if(e.calcNotaT > aux_mayor)
    aux_mayor =  e.calcNotaT();
    
if (e.sexo === 1){ //1) Mujer   2)Hombre
    cont_f++;
    if(e.calcNotaT >= 48)
    cont_f_a++;
    }
 }
    devolverNotaT(){
        return e.nota1+e.nota2+e.nota3;
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