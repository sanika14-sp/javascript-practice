function updateTime(){
    let n= new Date();
    let h= String(n.getHours()).padStart(2,"0");
    let m= String(n.getMinutes()).padStart(2, '0');
    let s= String(n.getSeconds()).padStart(2, '0');
    let time = `${h}:${m}:${s}`;
   document.getElementById("time").innerHTML= time;
}
// updateTime();
//setInterval(updateTime ,1000);

function updateDate(){
    let d= new Date();
    let date = String(d.getDate()).padStart(2, '0');
    let month = String(d.getMonth() +1).padStart(2,"0");
    let year = d.getFullYear();
    document.getElementById("date").innerHTML= `${date}/${month}/${year}`;
}
//updateDate();


function updateDay(){
    let nday = new Date();
    let day = nday.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("day").innerHTML = days[day];
}
//updateDay();