
// for loop er satement i=0;   condition area i<look.length   executed code i++;



//    const look =["A","B", "C", "D", "E" ];

//    for(let i=10; i<10; i--){
//        console.log(i);
//    } 




//    first questions 

  var sum=0;
  
  for (let i=0; i<=15;i++){
      
      if(i%2 !=0){
        //   console.log(i);
          sum+=i;
      }
  }
   
  console.log("# -Frist 15 odd number Addition =",sum);




  //    2nd questions 


   var sum=1;

   for(let count=1; count<=20; count++){
       if(count%2 ==0){
        //    console.log(count);
           sum *=count;
       }
   }
console.log("# -Frist 20 event Number Maltiply =",sum);
  


//  3rd questions


    

    
        var look=[];
        var x=5;
        
      
        for(let num=1; num<= x; num++){
            // console.log(num);
            if(num%2 !=0){
               look.push("#");
            }
            else{
                look.push("-");
            }
        }
        console.log("result =",look);






  



  
