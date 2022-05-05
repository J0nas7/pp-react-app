export const GuestLayout = ({ children }) => {
    return (
        <div className="guestWrapper">
            <div className="contents">
                { children }
            </div>
            <div className="teaserCard">
                <img src="https://ir.ebaystatic.com/pictures/aw/sc/seasonal-playbook/21/teddy_bear_on_ebay_box.png" alt="Teaser decor" id="teaserImg" />
            </div>
        </div>
    )
}