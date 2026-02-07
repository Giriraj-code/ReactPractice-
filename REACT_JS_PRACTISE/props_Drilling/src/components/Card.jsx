function Card(props){
    console.log(props.user , props.age)
    return (
        
        <div className="card">
            
            {props.img && <img className='img' src={props.img} alt="image random" />}
            <h2>Card Component</h2>
            <p>This is a simple card component.{props.user} {props.age}</p>
            <button className="card_button">Submit</button>
            
        </div>

    )
}
export default Card;