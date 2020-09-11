const DiasSemana = ["lunes,martes,miercoles,jueves,viernes"];
const finSemana = DiasSemana.map(D => D +[",sabado,domingo"] );
 
console.log (finSemana)