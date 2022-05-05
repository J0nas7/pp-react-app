import { useState, useEffect } from 'react'
import axios from 'axios'
import Order from '../components/Order'

const Home = () => {
    const [mySales, setMySales] = useState(false)
    const [Sales, setSales] = useState([])
    
    const [myPurchases, setMyPurchases] = useState(false)
    const [Purchases, setPurchases] = useState([])

    const getOrders = async (POV) => {
        const date = new Date();
        var RequestUrl = "http://workspace.properpay.net/index.php"
        RequestUrl += "?Category=Orders&Action=ReadOrdersSmall";
        
        const theData = {
            profileID: 2,
            POV: POV
        }

        axios.post(RequestUrl, theData)
            .then(res => {
                for (const order in res.data) {
                    date.setTime(res.data[order].Order_StartTime*1000);
                    res.data[order].Order_StartTime = date.getDate()+"/"+date.getMonth()+"-"+date.getFullYear()
                    res.data[order].Order_PartnerTxt = (POV == "Sales" ? "Buyer: " : "Seller: ");
                }

                if (POV == "Sales") {
                    setMySales(true)
                    setSales(res.data)
                } else if (POV == "Purchases") {
                    setMyPurchases(true)
                    setPurchases(res.data)
                }
            })
    }

    useEffect(() => {
        getOrders("Sales")
        getOrders("Purchases")
    }, [])

    return (
        <div className="contentBox homePage">
            { !mySales &&
                <div className="orderPOVloading">
                    <span className="orderPOVtitle">Your sales</span>
                    <img className="orderPOVloader" src={require('../Assets/Images/loader.gif')}/>
                    <div className="order-placeHolder loading"></div>
                    <div className="order-placeHolder loading"></div>
                    <div className="order-placeHolder loading"></div>
                </div>
            }
            { Sales && 
                <div className="Orders">
                    <span className="pageTitle">Your sales</span>
                    <div className="clrBth">
                        {Sales.map((Sale, i) =>
                            <Order order={Sale} key={i}></Order>
                        )}
                    </div>
                </div>
            }

            { !myPurchases &&
                <div className="orderPOVloading">
                    <span className="orderPOVtitle">Your purchases</span>
                    <img className="orderPOVloader" src={require('../Assets/Images/loader.gif')}/>
                    <div className="order-placeHolder loading"></div>
                    <div className="order-placeHolder loading"></div>
                    <div className="order-placeHolder loading"></div>
                </div>
            }
            { Purchases && 
                <div className="Orders">
                    <span className="pageTitle">Your purchases</span>
                    <div className="clrBth">
                        {Purchases.map((Purchase, i) =>
                            <Order order={Purchase} key={i}></Order>
                        )}
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;