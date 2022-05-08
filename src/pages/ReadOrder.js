import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Order from '../components/Order'
import Profile from '../components/Profile'

const ReadOrder = () => {
    const params = useParams()
    const [theOrder, setTheOrder] = useState(false)

    const orderId = params.orderId

    const getOrder = async (OrderID) => {
        const date = new Date();
        var RequestUrl = "http://workspace.properpay.net/index.php"
        RequestUrl += "?Category=Orders&Action=ReadOrder";

        const theData = {
            orderID: OrderID,
            profileID: 2
        }

        axios.post(RequestUrl, theData)
            .then(res => {
                setTheOrder(res.data)
                console.log(res.data)
            })
    }

    useEffect(() => {
        getOrder(orderId);
    }, []);

    return (
        <div className="contentWrapper">
            <button className="submit blue">&laquo; Go back</button>

            { !theOrder && 
                <div className="Loading">test</div>
            }
            { theOrder && 
                <div className="orderWrapper">
                    <Profile ProfileID={theOrder.Order_Buyer} h1="Buyer" showButtons="false" />
                    <Profile ProfileID={theOrder.Order_Seller} h1="Seller" showButtons="false" />
                </div>
            }
        </div>
    )
}

export default ReadOrder;