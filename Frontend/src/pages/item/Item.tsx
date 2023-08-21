import "./item.scss"
import Single from "../../components/single/Single"
import { singleItem } from "../../data"
const Item = () => {

    // Fetch data and send to Single Component
    return (
      <div className="item">
        <Single {...singleItem} />
      </div>
    )
}

export default Item
