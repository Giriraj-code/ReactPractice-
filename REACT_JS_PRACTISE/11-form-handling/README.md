froms have some default behaviour while submiting the form it dosent show the clg command in console when the form is submit it reload the page and we have to prevent it .

this how we prevent default behaviour of form in react 

const submitHandler = (e) => {
e.preventDefault()
console.log("Form submited");
}

int he form tag we have to write 

<form onSubmit={(e) =>{
    submitHandler(e)
}><form/>

For managing the input in react we have a concept of two ways binding 