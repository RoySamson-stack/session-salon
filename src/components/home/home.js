import "./home.css"
import CardData from "../cards/cardData"
import data from "../cards/data"

function Home(){
  return(
   <div className="">
    <nav className="home-nav">
    <div>
    <p>Session salon</p>    
    </div>
    <div >
    <input type="text" className="search-input" placeholder="Search"/>
    <button className="search_btn">Search</button>
    </div>
    <div>
    <p>Profile</p>
  </div>
    </nav>
    <div className="line-1"></div>
    <div className="home-body">
    <h2 className="grid-title">Salons</h2>
    <div className="salon-grid">
    {/* {data.map(data => (
                    <CardData
                        key={data.id}
                        {...data}
                    />
                ))} */}


       <div className="card">
          <h1>make booking</h1>
       </div> 
       <div className="card">
          <h1>make booking</h1>
       </div>         
    </div>
    </div>
   </div> 
  )
}
export default Home