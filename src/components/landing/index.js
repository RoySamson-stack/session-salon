import "./landing.css"
import Popup from 'reactjs-popup';


function Index(){
  return(
    <div className="indexpage">
      <nav className="topnav">
      <div className="left_topnav">
      <p>Session salon</p>
      </div>
      <div className="right_topnav">
        <div>
        <a href="#" className="add_link">Add listing</a>
        </div>
        <div>
        <a href="/login" className="btn_landing">Login</a>
        </div>
        <div>
        <a href="/signup" className="btn_landing">Signup</a>
        </div>

      </div>
      </nav>
      <div className="landing_body">
      <div className="langing_body-left">
      <h2 className="intro-sec">All for the sake of your beauty</h2>
      <div className="sm-intro-sec">
      <div>
      <button className="btn-body">Book now</button>
      </div>
      <div>
        <button className="btn-body" id="btn-body__partner">Partner salons</button>
      </div>
      </div>
      </div>
      <div className="landing_body--right">
     
        right
      </div>
      </div>
    </div>
  )
}
export default Index 