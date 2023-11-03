import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidgetComponent = () => {
    return (
        <div>
        <FontAwesomeIcon icon={faCartShopping} style={{paddingRight: '10px'}}/>
        <span></span>
        </div>
    )
}

export default CartWidgetComponent;