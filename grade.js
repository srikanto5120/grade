  function grade(mark){
     if( mark <100 && mark >=80){
        console.log('A+');

     }
     else if( mark < 80 && mark >= 70){
         console.log('A');
     
     }
     else if( mark < 70 && mark >= 60){
         console.log('A-');
     
     }
     else if( mark < 60 && mark >= 50){
         console.log('B');
     }
     else if( mark < 50 && mark >= 40){
        console.log('C');
    }
    else if( mark <40   && mark >= 32){
        console.log('D');
    }
    else if( mark <32 && mark >= 0){
        console.log('Fail');
    }
     else{
         console.log('He is not a sutdent');
     }
    
  }



//   let myMark= 59;
//    let myGrade = grade(myMark);
    

   function grade1(mark) {
      
       switch(true){
        case mark<= 100 && mark >= 80:
            console.log('A+');
            break; 
        case mark < 80 && mark >= 70:
             console.log('A');
            break;
        case mark < 70 && mark >= 60:
             console.log('A-');
            break;
        case mark < 60 && mark >= 50:
             console.log('B');
            break;
        case mark < 50 && mark >= 40:
             console.log('C');
            break;
        case mark < 40 && mark >= 32:
             console.log('D');
            break;
        case mark < 32 && mark >= 0:
             console.log('F');
            break;
        default:
            console.log('Input the write number')

       }
   }
    let inputMark = 80;
    let result = grade1(inputMark);