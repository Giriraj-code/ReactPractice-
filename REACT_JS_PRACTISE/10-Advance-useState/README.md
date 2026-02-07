SetNum function work asynchronous way means in random order kuch phele chalri kuch bad me asa kuch 
synchronous means order wise 
Destructor kerna means ki copy banalena but same reference ni rahega 
jo phele vale ka data he same copy vale me agya but reference same ni rahe ga


{Batch update}
example
const btnClicked = () =>{
    setNum(Num+1)
    setNum(Num+1)
    setNum(Num+1)
}

This is not application it will ittirate only by one

for Batch Updatewe have to write
const btnClicked = () =>{
   setNum(prev => (prev+1))
   setNum(prev => (prev+1))
   setNum(prev => (prev+1))
}

Here it will ittereate by increasing the value by each {setNum(prev =>(prev+1))}