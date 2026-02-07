import { Bookmark } from "lucide-react"
function App(){
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TD7GT-8-u51NAAf4sb6jjDSClf0KlcSjSCJRWBX-MvCZYlWED_1mGvk&s" alt="" />
          <button>Save it <Bookmark size={13}/></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 Days Ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$128/hr</h3>
            <p>India </p>
          </div>
          <button>Appy Now</button>
        </div>
      </div>
    </div>
  )
}
export default App