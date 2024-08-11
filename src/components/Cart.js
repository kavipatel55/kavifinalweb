import Table from 'react-bootstrap/Table';
import "./component.css";
function Cart(){
    const Checkout = async=>{
        window.location.href ="/CheckOut";
    }
    return(
        <div className="cart">
            <h2>Cart</h2>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th><h5>Image</h5></th>
                        <th><h5>name</h5></th>
                        <th><h5>Quantity</h5></th>
                        <th><h5>Price</h5></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><img className='cart-img' src='../assets/images/monitor.png'></img></th>
                        <th>monitor</th>
                        <th>4</th>
                        <th>150</th>
                    </tr>
                    <tr>
                        <th><img className='cart-img' src='../assets/images/chair.png'></img></th>
                        <th>monitor</th>
                        <th>4</th>
                        <th>150</th>
                    </tr>
                </tbody>
            </Table>
            <button className='details-link' onClick={Checkout}>
                Proceed to checkout
            </button>
           
        </div>
    );
}export default Cart;