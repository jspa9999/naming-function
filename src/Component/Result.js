import React, { useRef } from 'react'

function Result() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let sanInputRef=useRef();
    let engInputRef=useRef();
    let phyInputRef=useRef();
    let mathAInputRef=useRef();
    let cheInputRef=useRef();
    let mathBInputRef=useRef();
    let resultParaRef=useRef();
    let sanResultRef=useRef();
    let engResultRef=useRef();
    let phyResultRef=useRef();
    let mathAResultRef=useRef();
    let cheResultRef=useRef();
    let mathBResultRef=useRef();

    let calculateResult = ()=>{
      //console.log("resultCalculation");
      let firstName=firstNameInputRef.current.value;
      let lastName=lastNameInputRef.current.value;
      let engMarks=Number(engInputRef.current.value);
      let sanMarks=Number(sanInputRef.current.value);
      let phyMarks=Number(phyInputRef.current.value);
      let mathAMarks=Number(mathAInputRef.current.value);
      let cheMarks=Number(cheInputRef.current.value);
      let mathBMarks=Number(mathBInputRef.current.value);
      let totalMarks= engMarks+sanMarks+phyMarks+mathAMarks+cheMarks+mathBMarks;
      let result;

      if (engMarks<35||sanMarks<35||phyMarks<35||mathAMarks<35||cheMarks<35||mathBMarks<35) {

         result= "failed";

      } else{
        
        result= "passed";
      }


      resultParaRef.current.innerHTML=`${firstName} ${lastName}${result} in tenth and got marks are ${totalMarks}`
      alert(`totalMarks are ${totalMarks}`);
    }

    let sanOnChange = ()=>{
      if (sanInputRef.current.value>=0&& sanInputRef.current.value<=100){
        if(sanInputRef.current.value>=35){
          sanResultRef.current.innerHTML="pass";
          sanResultRef.current.style.backgroundColor="green";
        }else {
          sanResultRef.current.innerHTML="fail";
          sanResultRef.current.style.Color="red";
        }
      } else {
          sanResultRef.current.innerHTML="INVALID";
          sanResultRef.current.style.color="Orange";
         }
    }
    
    let sanOnFocus = ()=>{
      sanInputRef.current.style.backgroundColor="blue";
    }
     
    let sanOnBlur = ()=>{
      sanInputRef.current.style.backgroundColor="aqua";
    }

    let engOnChange = ()=>{
      if (engInputRef.current.value>=0&& engInputRef.current.value<=100){
        if (engInputRef.current.value>=35) {
         engResultRef.current.innerHTML="pass";
         engResultRef.current.style.color="green";
         
        } else {
         engResultRef.current.innerHTML="fail";
           engResultRef.current.style.color="red";
        }
         
        } else {
         engResultRef.current.innerHTML="INVALID";
         engResultRef.current.style.color="Orange";
        }
    }

    let engOnFocus = ()=>{
      engInputRef.current.style.backgroundColor="blue";
    }
    let engOnBlur = ()=>{
      engInputRef.current.style.backgroundColor="aqua";
    }
    let phyOnChange = ()=>{
      if (phyInputRef.current.value>0&&phyInputRef.current.value<100) {
        if (phyInputRef.current.value>=35) {
            phyResultRef.current.innerHTML ="pass";
            phyResultRef.current.style.Color="green" ;
            
        } else {
            phyResultRef.current.innerHTML ="fail";
    phyResultRef.current.style.Color= "red";
        }
        
    } else {
        phyResultRef.current.innerHTML="INVALID";
        phyInputRef.current.style.Color="blue";
    }
    }

    let phyOnFocus = ()=>{
      phyInputRef.current.style.backgroundColor="blue";
    }
     
   let phyOnBlur = ()=>{
    phyInputRef.current.style.backgroundColor="aqua";
   } 
   
   let mathAOnChange = ()=>{
    if (mathAInputRef.current.value>=0&& mathAInputRef.current.value<=100){
      if(mathAInputRef.current.value>=35){
      mathAResultRef.current.innerHTML ="pass";
      mathAResultRef.current.style.Color="green" ;

    } else{
      mathAResultRef.current.innerHTML ="fail";
      mathAResultRef.current.style.Color= "red";
    } 
    
  } else {
    mathAResultRef.current.innerHTML="INVALID";
    mathAResultRef.current.style.color="blue";
   }
   }
    
   let mathAOnFocus = ()=>{
    mathAInputRef.current.style.backgroundColor="blue";
   }

   let mathAOnBlur = ()=>{
    mathAInputRef.current.style.backgroundColor="aqua";
   }

   let cheOnChange = ()=>{
    if (cheInputRef.current.value>=0&& cheInputRef.current.value<=100){
      if(cheInputRef.current.value>=35){
      cheResultRef.current.innerHTML ="pass";
      cheResultRef.current.style.Color="green" ;
    } else{
      cheResultRef.current.innerHTML ="fail";
      cheResultRef.current.style.Color= "red";
    } 
  } else {
    cheResultRef.current.innerHTML="INVALID";
    cheResultRef.current.style.color="blue";
   }
   }
    
   let cheOnFocus = ()=>{
    cheInputRef.current.style.backgroundColor="blue";
   }

   let cheOnBlur =()=>{
    cheInputRef.current.style.backgroundColor="aqua";
   }
   
   let mathBOnChange = ()=>{
    if (mathBInputRef.current.value>=0&& mathBInputRef.current.value<=100){
      if(mathBInputRef.current.value>=35){
      mathBResultRef.current.innerHTML ="pass";
     mathBResultRef.current.style.Color="green" ;
    } else{
      mathBResultRef.current.innerHTML ="fail";
      mathBResultRef.current.style.Color= "red";
    } 
  } else {
    mathBResultRef.current.innerHTML="INVALID";
    mathBResultRef.current.style.color="blue";
   }
   }

   let mathBOnFocus = ()=>{
    mathBInputRef.current.style.backgroundColor="blue";
   }
    
   let mathBOnBlur = ()=>{
    mathBInputRef.current.style.backgroundColor="aqua";
   }

  return (
    <div>
    <form className="frm">

      <div className="fm">
      <label className="abc">FirstName</label>
      <input type="text" ref={firstNameInputRef} onFocus={()=>{firstNameInputRef.current.style.backgroundColor="blue";}}
      onChange={()=>{}} onBlur={()=>{firstNameInputRef.current.style.backgroundColor="aqua";}}></input>
     </div> 

     <div className="fm">
      <label className="abc">LastName</label>
      <input type="text" ref={lastNameInputRef} onFocus={()=>{lastNameInputRef.current.style.backgroundColor="blue";}}
      onChange={()=>{}} onBlur={()=>{lastNameInputRef.current.style.backgroundColor="aqua";}}></input>
      
     </div> 

     <div className="fm">
      <label className="abc">Sanskrit</label>
      <input type="Number" ref={sanInputRef} onFocus={()=>{ sanOnFocus();
        }}
      
      onChange={()=>{
        sanOnChange();
    }
  }
      
       onBlur={()=>{sanOnBlur();}}></input>
      <span className="para" ref={sanResultRef}></span>
     </div> 

     <div className="fm">
      <label className="abc">English</label>
      <input type="Number" ref={engInputRef} onFocus={()=>{engOnChange();}}

      onChange={()=>{ 
        engOnChange();
       }}
        
      onBlur={()=>{engOnBlur();}}></input>
      <span className="para" ref={engResultRef}></span>
     </div> 
      
     <div className="fm">
      <label className="abc">Physics</label>
      <input type="Number" ref={phyInputRef} onFocus={()=>{phyOnFocus();}}
      onChange={()=>{ phyOnChange();
       
    }} 
      onBlur={()=>{}}></input>
      <span className="para" ref={phyResultRef}></span>
     </div> 
      
     <div className="fm" >
      <label className="abc">Maths-A</label>
      <input type="Number" ref={mathAInputRef} onFocus={()=>{mathAOnFocus();}}
      onChange={()=>{
        
           }} 
     onBlur={()=>{mathAOnBlur();}}></input>
      <span className="para" ref={mathAResultRef}></span>
     </div> 

     <div className="fm">
      <label className="abc">Chemistry</label>
      <input type="Number" ref={cheInputRef} onFocus={()=>{cheOnFocus();}}
      onChange={()=>{ cheOnChange();
        
      }} onBlur={()=>{cheOnBlur();}}></input>
      <span className="para" ref={cheResultRef}></span>
     </div> 

     <div>
      <label className="abc">Maths-B</label>
      <input type="Number" ref={mathBInputRef} onFocus={()=>{mathBOnFocus();}}
      onChange={()=>{
        mathBOnChange();
      }} onBlur={()=>{mathBOnBlur();}}></input>
      <span className="para" ref={mathBResultRef}></span>
     </div> 
     
     <div>
     <button type="button" onClick={()=>{

      calculateResult();

     }}> Calculate Result </button>

     <div>
      <p ref={resultParaRef}>
        Please Enter Value and Click Continue
      </p>
     </div>
      
      </div>

     </form>
     
     </div>

  
  )
}

export default Result