
const hammer = document.querySelector('.hammer');
const tuk = document.querySelector('.animation')
const lab = document.querySelector('.lab');

var a=0;
var d=0;
var b=0;
function rrr(){

    

    
   hammer.classList.add('hammer2');
 d=2
   a++;
 console.log(a);
 alert("You took Thor's hammer ;)")
/*
a++;
if (d=2){
    console.log('good');
}
 */


}







hammer.onclick=rrr;
////////////////////////////////////////////////////////




function rrer(){
    
   
    if(  d==2 ){

        b++;

            if(b==1 && d==2){

               console.log('good');

               tuk.classList.add('animation1');
           
       
            }
                
               }
     
              if(b==2 && d==2){

                tuk.classList.add('animation2');
             
             }
              if(b==3 && d==2){

                tuk.classList.add('animation3');
               
                
             }

             if(b==4 && d==2){

                lab.classList.add('lv');
               
                
             }

             else{

             }


             console.log(b);

            
        }


 
 tuk.onclick=rrer;
 

 
 
 
 
 
 


 