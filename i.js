function updateclock()
{
    const now=new Date();
     
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    let time=hours+":"+minutes+":"+seconds
    console.log(time)
    document.getElementById("clock").innerHTML=time;
}
setInterval(updateclock,1000);