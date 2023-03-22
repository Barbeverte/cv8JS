let tabImg = document.querySelectorAll('.tp img');
let imgEnCours = '';
console.log(tabImg);
let ecran = document.getElementById('ecran');

for(let img of tabImg){
    
    img.addEventListener('click', function(){ /* recupère id img en cours*/
    imgEnCours = this.id;
    //    console.log("imgEnCours1 = " + imgEnCours);
 
        for(u of tabImg){ 
            let imgId = u.id;
            //  console.log("imgEnCours(u) = "+imgEnCours+" imgId = "+imgId);
            
              u.parentNode.classList.remove("tp", "col-xl-3", "col-md-6", "col-12");
              if(imgId != imgEnCours){  /* reduit les autres img*/
            //   console.log(" reduit "+ imgId);
                u.parentNode.classList.add("tp","col-1");
                // console.log("classe parent = "+u.parentNode.className);
                  
        }else{ /* agrandit l'img cliquée */
        console.log("agrandit "+ imgId);
        u.parentNode.classList.add("tp","col-md-8", "col-6");
        // console.log("classe agrandie = "+u.parentNode.className);
        if(imgId == "img2" || imgId == "img3"){
            ecran.scrollTop =1500;
        }

    }
        
    }

        this.addEventListener('mouseout',function(){
            
            for(v of tabImg){
                let imId = v.id;
                if(imId != imgEnCours){
                    v.parentNode.classList.remove("tp","col-1");
                    v.parentNode.classList.add("tp","col-xl-3", "col-md-6", "col-12");
                }else{
                    this.parentNode.classList.remove("tp","col-md-8", "col-6");
            this.parentNode.classList.add("tp","col-xl-3", "col-md-6", "col-12");
                }
            }
            })
        })
    }