const Order = (props) => {
    const Order = props.order
    const itemImgFolder = "http://workspace.properpay.net/item_images/"

    return (
        <div className="Order">
            <img align="left" width="100px" src={itemImgFolder + Order.Item_ImgSrc} />
            <div class="OrderDetails">
                <span className="Item_Title">{Order.Item_Title}</span>
                <span className="Item_Price">{Order.Item_Price}</span>
                <span className="Order_StartTime">{Order.Order_StartTime}</span>
                <span className="Order_Partner">{ Order.Order_PartnerTxt + Order.Profile_Name }</span>
            </div>
            <div className="clrBth"></div>
        </div>
    )
}

export default Order;