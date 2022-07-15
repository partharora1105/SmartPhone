


                
window.onscroll = function() {scroller()};

function scroller() {
 if (document.body.scrollTop > 0 || document.documentElement.scrollTop >0 && document.body.scrollTop < 501 && document.documentElement.scrollTop < 501) {
    document.getElementById("ex").style.fontSize = "75px";
     document.getElementById("ex").style.transition = "0.5s ease";
     document.getElementById("section2").style.display = "none";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.display = "none";  
      document.getElementById("section5").style.display = "none"; 
  } 
 else if (document.body.scrollTop > 500 || document.documentElement.scrollTop >500 && document.body.scrollTop < 1001 && document.documentElement.scrollTop < 1001) {
    document.getElementById("ex").style.fontSize = "90px";
     document.getElementById("ex").style.transition = "0.5s ease";
     document.getElementById("section2").style.display = "none";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.display = "none";  
      document.getElementById("section5").style.display = "none"; 
  } 
else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000  && document.body.scrollTop < 1501 && document.documentElement.scrollTop < 1501) {
    document.getElementById("ex").style.fontSize = "105px";
    document.getElementById("ex").style.transition = "0.5s ease";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";  
     document.getElementById("section5").style.display = "none"; 
  } 
  else if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500 && document.body.scrollTop < 2001 && document.documentElement.scrollTop < 2001) {
    document.getElementById("ex").style.fontSize = "120px";
    document.getElementById("ex").style.transition = "0.5s ease";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";  
     document.getElementById("section5").style.display = "none"; 
  }
  else if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000 && document.body.scrollTop < 2501 && document.documentElement.scrollTop < 2501) {
    document.getElementById("ex").style.fontSize = "135px";
   document.getElementById("ex").style.transition = "0.5s ease";
   document.getElementById("section2").style.display = "none";
   document.getElementById("section3").style.display = "none";
   document.getElementById("section4").style.display = "none";  
    document.getElementById("section5").style.display = "none"; 
  }

  else if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500 && document.body.scrollTop < 4001 && document.documentElement.scrollTop < 4001) {
    document.getElementById("ex").style.fontSize = "150px";
    document.getElementById("ex").style.transition = "0.5s ease";
         document.getElementById("section1").style.top = "0"
     document.getElementById("section1").style.transition = "0.5s ";
     document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";  
     document.getElementById("section5").style.display = "none"; 
    
  }
  
     else if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000 && document.body.scrollTop < 4501 && document.documentElement.scrollTop < 4501) {
    // document.getElementById("section1").style.display = "none";
     document.getElementById("section1").style.top = "-20%";
     document.getElementById("section1").style.transition = "0.5s ";
     document.getElementById("section2").style.display = "none";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.display = "none";  
      document.getElementById("section5").style.display = "none"; 
    }
    else if (document.body.scrollTop > 4500 || document.documentElement.scrollTop > 4500 && document.body.scrollTop < 5001 && document.documentElement.scrollTop < 5001) {
    // document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
     document.getElementById("section1").style.top = "-40%";
     document.getElementById("section1").style.transition = "0.5s ";
     document.getElementById("static").style.top = "95%";
     document.getElementById("static").style.transition = "0.5s ";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.display = "none";  
      document.getElementById("section5").style.display = "none"; 

    }
     else if (document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000 && document.body.scrollTop < 5501 && document.documentElement.scrollTop < 5501) {
    // document.getElementById("section1").style.display = "none";
     document.getElementById("section1").style.top = "-60%";
     document.getElementById("section1").style.transition = "0.5s ";
     document.getElementById("static").style.top = "75%";
     document.getElementById("static").style.transition = "0.5s ";
     document.getElementById("section3").style.display = "none";
     document.getElementById("section4").style.display = "none";  
      document.getElementById("section5").style.display = "none"; 
    }
     else if (document.body.scrollTop > 5500 || document.documentElement.scrollTop > 5500 && document.body.scrollTop < 6001 && document.documentElement.scrollTop < 6001) {
    // document.getElementById("section1").style.display = "none";
     document.getElementById("section1").style.top = "-80%";
     document.getElementById("section1").style.transition = "0.5s ";
     document.getElementById("static").style.top = "55%";
     document.getElementById("static").style.transition = "0.5s ";
     document.getElementById("dynamic1").style.transition = "0.5s ";
     document.getElementById("dynamic1").style.display = "none"; 
     document.getElementById("section3").style.display = "none"; 
     document.getElementById("section4").style.display = "none";   
      document.getElementById("section5").style.display = "none"; 

    }
     else if (document.body.scrollTop > 6000 || document.documentElement.scrollTop > 6000 && document.body.scrollTop < 7001 && document.documentElement.scrollTop < 7001) {
    // document.getElementById("section1").style.display = "none";
     document.getElementById("section1").style.top = "-100%";
     document.getElementById("section1").style.transition = "0.5s ";
    document.getElementById("section1").style.display = "flex";
    document.getElementById("static").style.top = "35%";
    document.getElementById("static").style.transition = "0.5s ";
    document.getElementById("dynamic1").style.top = "30%";
    document.getElementById("dynamic1").style.display = "block";
    document.getElementById("dynamic1").style.visibility = "hidden";
    document.getElementById("phone2").style.top = "100%";
    document.getElementById("phone2").style.transition = "0.5s ";
    document.getElementById("phone1").style.top = "-55%";
    document.getElementById("phone1").style.transition = "0.5s ";
    document.getElementById("section1").style.display = "flex";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";  
     document.getElementById("section5").style.display = "none"; 

     	
    }

     else if (document.body.scrollTop > 7000 || document.documentElement.scrollTop > 7000 && document.body.scrollTop < 8001 && document.documentElement.scrollTop < 8001) {
     	document.getElementById("dynamic1").style.top = "35%";
     	document.getElementById("dynamic1").style.transition = "0.5s ";
     	document.getElementById("dynamic1").style.visibility = "visible";
     	document.getElementById("dynamic2").style.display = "none"; 
     	document.getElementById("dynamic1").style.display = "block";
      document.getElementById("phone2").style.top = "80%";
    document.getElementById("phone2").style.transition = "0.5s "; 
    document.getElementById("phone1").style.top = "-30%";
    document.getElementById("phone1").style.transition = "0.5s ";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none"; 
     document.getElementById("section5").style.display = "none";  
     }

      else if (document.body.scrollTop > 8000 || document.documentElement.scrollTop > 8000 && document.body.scrollTop < 8501 && document.documentElement.scrollTop < 8501){
     document.getElementById("dynamic2").style.top = "30%";
    document.getElementById("dynamic2").style.display = "block";
    document.getElementById("dynamic2").style.visibility = "hidden";
    document.getElementById("phone2").style.top = "60%";
    document.getElementById("phone2").style.transition = "0.5s ";
    document.getElementById("phone1").style.top = "-5%";
    document.getElementById("phone1").style.transition = "0.5s ";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";  
     document.getElementById("section5").style.display = "none"; 
      }
      else if (document.body.scrollTop > 8500 || document.documentElement.scrollTop > 8500 && document.body.scrollTop < 9001 && document.documentElement.scrollTop < 9001){
      	document.getElementById("dynamic2").style.top = "35%";
     	document.getElementById("dynamic2").style.transition = "0.5s ";
     	document.getElementById("dynamic2").style.visibility = "visible";
     	document.getElementById("dynamic1").style.display = "none";  
     	document.getElementById("dynamic3").style.display = "none"; 
     	document.getElementById("dynamic2").style.display = "block";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 

      }
      else if (document.body.scrollTop > 9000 || document.documentElement.scrollTop > 9000 && document.body.scrollTop < 9501 && document.documentElement.scrollTop < 9501){
     document.getElementById("dynamic3").style.top = "30%";
    document.getElementById("dynamic3").style.display = "block";
    document.getElementById("dynamic3").style.visibility = "hidden";
    document.getElementById("phone2").style.top = "40%";
    document.getElementById("phone2").style.transition = "0.5s ";
    document.getElementById("phone1").style.top = "15%";
    document.getElementById("phone1").style.transition = "0.5s ";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none"; 
     document.getElementById("section5").style.display = "none";  
      }
      else if (document.body.scrollTop > 9500 || document.documentElement.scrollTop > 9500 && document.body.scrollTop < 10001 && document.documentElement.scrollTop < 10001){
      	document.getElementById("dynamic3").style.top = "35%";
     	document.getElementById("dynamic3").style.transition = "0.5s ";
     	document.getElementById("dynamic3").style.visibility = "visible";
     	document.getElementById("dynamic2").style.display = "none";
     	document.getElementById("machine").style.top = "100%";
    	document.getElementById("machine").style.transition = "0.5s ";  
      document.getElementById("section1").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 

      }
      else if (document.body.scrollTop > 10000 || document.documentElement.scrollTop > 10000 && document.body.scrollTop < 10501 && document.documentElement.scrollTop < 10501){
     document.getElementById("machine").style.top = "75%";
    document.getElementById("machine").style.transition = "0.5s ";
    document.getElementById("phone2").style.top = "20%";
    document.getElementById("phone2").style.transition = "0.5s ";
    document.getElementById("phone1").style.top = "35%";
    document.getElementById("phone1").style.transition = "0.5s ";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";  
     document.getElementById("section5").style.display = "none"; 
      }

      else if (document.body.scrollTop > 10500 || document.documentElement.scrollTop > 10500 && document.body.scrollTop < 11001 && document.documentElement.scrollTop < 11001){
     document.getElementById("machine").style.top = "50%";
    document.getElementById("machine").style.transition = "0.5s ";
    document.getElementById("section2").style.marginTop = "0";
      document.getElementById("section2").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 
      }

    else if (document.body.scrollTop > 11000 || document.documentElement.scrollTop > 11000 && document.body.scrollTop < 11501 && document.documentElement.scrollTop < 11501){
      document.getElementById("section2").style.marginTop = "-10%";
      document.getElementById("section2").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  
    }
    else if (document.body.scrollTop > 11500 || document.documentElement.scrollTop > 11500 && document.body.scrollTop < 12001 && document.documentElement.scrollTop < 12001){
      document.getElementById("section2").style.marginTop = "-25%";
      document.getElementById("section2").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";
       document.getElementById("section5").style.display = "none";   
    }
    else if (document.body.scrollTop > 12000 || document.documentElement.scrollTop > 12000 && document.body.scrollTop < 12501 && document.documentElement.scrollTop < 12501){
      document.getElementById("section2").style.marginTop = "-50%";
      document.getElementById("section2").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 
    }
    else if (document.body.scrollTop > 12500 || document.documentElement.scrollTop > 12500 && document.body.scrollTop < 13001 && document.documentElement.scrollTop < 13001){
      document.getElementById("section2").style.marginTop = "-75%";
      document.getElementById("section2").style.transition = "0.5s ";
      document.getElementById("section2").style.display = "block";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  
      

    }
    else if (document.body.scrollTop > 13000 || document.documentElement.scrollTop > 13000 && document.body.scrollTop < 13501 && document.documentElement.scrollTop < 13501){
      document.getElementById("section2").style.marginTop = "-100%";
      document.getElementById("section2").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  
      
      
    }

    else if (document.body.scrollTop > 13500 || document.documentElement.scrollTop > 13500 && document.body.scrollTop < 14001 && document.documentElement.scrollTop < 14001){
      document.getElementById("section3").style.display = "block";
      document.getElementById("camera").style.bottom = "-100%";
      document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  
    }
   
    else if (document.body.scrollTop > 14001 || document.documentElement.scrollTop > 14001 && document.body.scrollTop < 15001 && document.documentElement.scrollTop < 15001){
      document.getElementById("camera").style.bottom = "-60%";
      document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 
    }
    else if (document.body.scrollTop > 15000 || document.documentElement.scrollTop > 15000 && document.body.scrollTop < 15501 && document.documentElement.scrollTop < 15501){
      document.getElementById("camera").style.bottom = "-40%";
      document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.display = "none";
      document.getElementById("rc").style.display = "none";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  
    }
    else if (document.body.scrollTop > 15500 || document.documentElement.scrollTop > 15500 && document.body.scrollTop < 16001 && document.documentElement.scrollTop < 16001){
      document.getElementById("camera").style.bottom = "-20%";
      document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.display = "block";
      document.getElementById("rc").style.display = "block";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  

    }
    else if (document.body.scrollTop > 16000 || document.documentElement.scrollTop > 16000 && document.body.scrollTop < 17501 && document.documentElement.scrollTop < 17501){
      document.getElementById("camera").style.bottom = "0";
      document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.visibility = "visible";
      document.getElementById("rc").style.visibility = "visible";
      document.getElementById("fc").style.transition = "0.5s ";
      document.getElementById("rc").style.transition = "0.5s ";
      document.getElementById("fc").style.fontSize = "calc(1.275rem + .3vw)";
      document.getElementById("rc").style.fontSize = "calc(1.275rem + .3vw)";
      document.getElementById("camera").style.left = "25%";
      document.getElementById("fc").style.left = "75%";
      document.getElementById("rc").style.left = "15%";
     document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.transition = "0.5s ";
       document.getElementById("rc").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 

    }
    else if (document.body.scrollTop > 17500 || document.documentElement.scrollTop > 17500 && document.body.scrollTop < 18001 && document.documentElement.scrollTop < 18001){
      document.getElementById("camera").style.left = "35%";
      document.getElementById("fc").style.left = "85%";
      document.getElementById("rc").style.left = "25%";
     document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.transition = "0.5s ";
       document.getElementById("rc").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 

    }
     else if (document.body.scrollTop > 18000 || document.documentElement.scrollTop > 18000 && document.body.scrollTop < 18501 && document.documentElement.scrollTop < 18501){
      document.getElementById("camera").style.left = "50%";
      document.getElementById("fc").style.left = "100%";
      document.getElementById("rc").style.left = "40%";
     document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.transition = "0.5s ";
       document.getElementById("rc").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none";  
       document.getElementById("section5").style.display = "none"; 
    }
     else if (document.body.scrollTop > 18500 || document.documentElement.scrollTop > 18500 && document.body.scrollTop < 19001 && document.documentElement.scrollTop < 19001){
      document.getElementById("camera").style.left = "75%";
      document.getElementById("fc").style.left = "125%";
      document.getElementById("rc").style.left = "65%";
     document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.transition = "0.5s ";
       document.getElementById("rc").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  
      

    }
     else if (document.body.scrollTop > 19000 || document.documentElement.scrollTop > 19000 && document.body.scrollTop < 19501 && document.documentElement.scrollTop < 19501){
      document.getElementById("camera").style.left = "110%";
      document.getElementById("fc").style.left = "160%";
      document.getElementById("rc").style.left = "100%";
     document.getElementById("camera").style.transition = "0.5s ";
      document.getElementById("fc").style.transition = "0.5s ";
       document.getElementById("rc").style.transition = "0.5s ";
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "block";
      document.getElementById("section4").style.display = "none"; 
       document.getElementById("section5").style.display = "none";  
    
      
    }

    else if (document.body.scrollTop > 19500 || document.documentElement.scrollTop > 19500 && document.body.scrollTop < 20001 && document.documentElement.scrollTop < 20001){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "block";
      document.getElementById("bt1").style.top = "120%";
       document.getElementById("bt2").style.top = "130%";
        document.getElementById("bt3").style.top = "120%";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
         document.getElementById("section5").style.display = "none"; 
     
    }
    
     else if (document.body.scrollTop > 20000 || document.documentElement.scrollTop > 20000 && document.body.scrollTop < 20501 && document.documentElement.scrollTop < 20501){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
     document.getElementById("bt1").style.top = "80%";
       document.getElementById("bt2").style.top = "90%";
        document.getElementById("bt3").style.top = "80%";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
         document.getElementById("section5").style.display = "none"; 
      
    }
     else if (document.body.scrollTop > 20500 || document.documentElement.scrollTop > 20500 && document.body.scrollTop < 21001 && document.documentElement.scrollTop < 21001){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
    document.getElementById("bt1").style.top = "60%";
       document.getElementById("bt2").style.top = "70%";
        document.getElementById("bt3").style.top = "60%";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
         document.getElementById("section5").style.display = "none"; 
      
    }
     else if (document.body.scrollTop > 21000 || document.documentElement.scrollTop > 21000 && document.body.scrollTop < 22001 && document.documentElement.scrollTop < 22001){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
     document.getElementById("bt1").style.top = "40%";
       document.getElementById("bt2").style.top = "50%";
        document.getElementById("bt3").style.top = "40%";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
         document.getElementById("section5").style.display = "none"; 
      
    }
     else if (document.body.scrollTop > 22000 || document.documentElement.scrollTop > 22000 && document.body.scrollTop < 22501 && document.documentElement.scrollTop < 22501){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
     document.getElementById("bt1").style.top = "20%";
       document.getElementById("bt2").style.top = "30%";
        document.getElementById("bt3").style.top = "20%";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
         document.getElementById("section5").style.display = "none"; 
      
    }
     else if (document.body.scrollTop > 22500 || document.documentElement.scrollTop > 22500 && document.body.scrollTop < 23001 && document.documentElement.scrollTop < 23001){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
    document.getElementById("bt1").style.top = "0";
       document.getElementById("bt2").style.top = "10%";
        document.getElementById("bt3").style.top = "0";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
         document.getElementById("section5").style.display = "none"; 
      
    }
     else if (document.body.scrollTop > 23000 || document.documentElement.scrollTop > 23000 && document.body.scrollTop < 23501 && document.documentElement.scrollTop < 23501){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
     document.getElementById("bt1").style.top = "-10%";
       document.getElementById("bt2").style.top = "0";
        document.getElementById("bt3").style.top = "-10%";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
         document.getElementById("section5").style.display = "none"; 
      
    }
    else if (document.body.scrollTop > 23500 || document.documentElement.scrollTop > 23500 && document.body.scrollTop < 24001 && document.documentElement.scrollTop < 24001){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
    document.getElementById("bt1").style.top = "-50%";
       document.getElementById("bt2").style.top = "-40%";
        document.getElementById("bt3").style.top = "-50%";
        document.getElementById("bt1").style.transition = "0.5s ";
        document.getElementById("bt2").style.transition = "0.5s ";
        document.getElementById("bt3").style.transition = "0.5s ";
        document.getElementById("section4").style.display = "block";
        document.getElementById("section5").style.display = "none";  
    
      
    }
     else if (document.body.scrollTop > 24000 || document.documentElement.scrollTop > 24000 && document.body.scrollTop < 25001 && document.documentElement.scrollTop < 25001){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";
      document.getElementById("section5").style.display = "block";
      document.getElementById("top").style.top = "-20%";
      document.getElementById("bottom").style.top = "120%";
      document.getElementById("left").style.left = "-20%";
      document.getElementById("right").style.left = "120%";
      document.getElementById("centre").style.fontSize = "0";
      document.getElementById("centre").style.left = "52%";
      document.getElementById("top").style.transition = "0.5s ";
      document.getElementById("bottom").style.transition = "0.5s ";
      document.getElementById("left").style.transition = "0.5s ";
      document.getElementById("right").style.transition = "0.5s ";
      document.getElementById("centre").style.transition = "0.5s ";
      
    }
    else if (document.body.scrollTop > 25000 || document.documentElement.scrollTop > 25000 && document.body.scrollTop < 25501 && document.documentElement.scrollTop < 25501){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";
      document.getElementById("top").style.top = "10%";
      document.getElementById("bottom").style.top = "90%";
      document.getElementById("left").style.left = "5%";
      document.getElementById("right").style.left = "95%";
      document.getElementById("centre").style.fontSize = "4em";
      document.getElementById("centre").style.left = "51%";
      document.getElementById("top").style.transition = "0.5s ";
      document.getElementById("bottom").style.transition = "0.5s ";
      document.getElementById("left").style.transition = "0.5s ";
      document.getElementById("right").style.transition = "0.5s ";
      document.getElementById("centre").style.transition = "0.5s ";

      
    }
    else if (document.body.scrollTop > 25500 || document.documentElement.scrollTop > 25500){
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";
      document.getElementById("top").style.top = "40%";
      document.getElementById("bottom").style.top = "60%";
      document.getElementById("left").style.left = "47.5%";
      document.getElementById("right").style.left = "52.5%";
      document.getElementById("centre").style.fontSize = "6em";
      document.getElementById("centre").style.left = "50%";
      document.getElementById("top").style.transition = "0.5s ";
      document.getElementById("bottom").style.transition = "0.5s ";
      document.getElementById("left").style.transition = "0.5s ";
      document.getElementById("right").style.transition = "0.5s ";
      document.getElementById("centre").style.transition = "0.5s ";

      
    }

  else {
   document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
   document.getElementById("section5").style.display = "none"; 
  }

}


