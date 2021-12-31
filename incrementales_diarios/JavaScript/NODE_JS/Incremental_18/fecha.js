//import moment from "moment"
const moment=require('moment');

const now =moment(new Date());

var utc=moment(new Date()).utc();
//const profile=document.getElementById("profile");
//profile.innerHTML=" ";

//const momentDay=document.createElement("div");
//momentDay.innerHTML=now.format('DD/MM/YYYY hh:mm:ss');
//profile.appendChild(momentDay);

console.log(now.format('DD/MM/YYYY hh:mm:ss'));

console.log(utc.format('DD-MM-YYYY hh:mm:ss'));

var duration=moment(utc.diff(now));

console.log('La diferencia entre zona horario y zona local es: '+duration.hours())
var fecha1='1910-06-06';
var fecha2='1980-01-05';

if (moment(fecha1).isBefore(fecha2))
{
    console.log('La feha1 '+ fecha1+ " es mayor que la fecha2 "+ fecha2);

}else{
    console.log('La feha2 '+ fecha2+ " es mayor que la fecha1 "+ fecha1);

}

exports.now = now;
exports.utc = utc;


