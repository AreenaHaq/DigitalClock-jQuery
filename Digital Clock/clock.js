function displayclock(){
    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        hrs=hrs-12
        session.innerHTML='PM';
    }
    else{
        session.innerHTML='AM';
    }
    $('#hour').html(hrs);
    $('#minutes').html(min);
    $('#seconds').html(sec);
}  

 setInterval(displayclock, 1000);