
import "./card.css"

function CardData(props){
  return(
      <div key={props.id} className="card">
        <img src={props.img} className="card_img"/>
        <h1>{props.name}</h1>
        {/* the button redirect to a page of the clicked salon to show services offered */}
        <button className="card_btn">View</button>
      </div>
  )
}
export default CardData