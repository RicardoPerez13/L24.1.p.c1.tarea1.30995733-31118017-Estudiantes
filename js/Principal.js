/*2. ESTUDIANTES

En la UCLA, el DCYT desea conocer algunas estadísticas de sus estudiantes. 
De cadaestudiante se conoce: su cédula, sexo y sus tres notas parciales. 
Se requiere conocer por el DCYT: 
a) nota total obtenida por el estudiante 
b) la mayor nota obtenida 
c) De los estudiantes femeninos cantidad de estudiantes aprobadas, 
d) promedio de notas

El DCYT suministra la siguiente información demostrativa, para 4 estudiantes: (cedula, sexo,
notap1, notap2, notap3) (13457856, M, 15, 20, 25) (15432551, F, 10, 10, 10) (32455678, M,
18, 22, 20) (28678900, F, 18, 25, 24)*/

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_DCYT from "./Cl_DCYT.js";

let estudiante1=new Cl_Estudiante (13457856, "M", 15, 20, 25);
let estudiante2=new Cl_Estudiante (15432551, "F", 10, 10, 10);
let estudiante3=new Cl_Estudiante (32455678, "M", 18, 22, 20);
let estudiante4=new Cl_Estudiante (28678900, "F", 18, 25, 24);
let dcyt=new Cl_DCYT();
dcyt.procesar(estudiante1);
dcyt.procesar(estudiante2);
dcyt.procesar(estudiante3);
dcyt.procesar(estudiante4);
let salida=document.getElementById("salida");
salida.innerHTML= "Resultados";
salida.innerHTML+= "<br> La nota total obtenida por el estudiante de cédula 13457856 fue: " +estudiante1.calcularNotaT();
salida.innerHTML+= "<br> La nota total obtenida por el estudiante de cédula 15432551 fue: " +estudiante2.calcularNotaT();
salida.innerHTML+= "<br> La nota total obtenida por el estudiante de cédula 32455678 fue: " +estudiante3.calcularNotaT();
salida.innerHTML+= "<br> La nota total obtenida por el estudiante de cédula 28678900 fue: " +estudiante4.calcularNotaT();
salida.innerHTML+= "<br>";
salida.innerHTML+= "<br> La mayor nota obtenida por un estudiante fue: " +dcyt.devolverMayor();
salida.innerHTML+= "<br> El total de estudiantes femeninas aprobadas es: " +dcyt.devolverContFA();
salida.innerHTML+= "<br> El promedio de notas de los estudiantes es de: " +dcyt.prom();