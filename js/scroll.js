ecran = document.getElementById('ecran');
ecran.addEventListener('scroll', function(){
    console.log(ecran.scrollTop);
    if(this.scrollTop > 300){
        document.getElementById('back-to-top').style.display = 'block';
    }else{
        document.getElementById('back-to-top').style.display = 'none'; 
    }
})