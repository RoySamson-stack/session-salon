import CardData from "./cardData"
import data from "./data"



function card(){
  <div className="">
 {data.map(contents => (
                    <CardData
                        key={data.id}
                        name={data.name}
                        // image={contents.image}
                        // name={contents.name}
                        // price={contents.price}
                        // totalSales={contents.totalSales}
                        // timeLeft={contents.timeLeft}
                        // rating={contents.rating}
                    />
                ))}
  </div>
}

export default card