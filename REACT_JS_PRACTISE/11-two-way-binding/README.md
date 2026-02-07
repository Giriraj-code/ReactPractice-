input tag ke under jo {value} attribute he vo input ki current value batata he

two way biniding me apn ye code kerte he 

const App = () =>{

const [Title, setTitle] = useState("");

const submitHandler = (e) => {
    e.preventDefault;
}
} 

<div>
<input onClick={(e)=>{
submitHandler(e)
}} placeholder='write something' value='Title' />
</div>


ab isme ky hoga ki jo hum ne value='Title' dala he vo use state ke useState('') ko refer kerega and jese hum setTitle change krenge chizze refelect hongi to Title then to value='Title' then to input {this is cal two way data binding }