import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, getProducts } from "../features/productsReducer";
import bannerImage from "../../public/pokemontcg_banner-min.jpg"
import freeShip from "../../public/freeship.png";
import securedPay from "../../public/secure_pay.png";
import { selectCurrentUser } from "../features/authSlice";
import { filterProducts } from "./allProductsHelper";
import ViewCard from "./ViewCard";

const Home = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const filteredCards = filterProducts(useSelector(selectProducts), 'Rare Holo');
    const startIndex = Math.floor(Math.random() * (filteredCards.length - 10));
    const randomCards = filteredCards.slice(startIndex - 10, startIndex);

    console.log(filteredCards);
    console.log(randomCards);

    useEffect(() => {
        // dispatch(getProducts());
    }, [startIndex]);


    return (
        <div className="content">
            <div id="homepage">
                <div id="bannerImg">
                    <img src={String(bannerImage)} alt="banner image of pokemon TCG homepage"/>
                    <Link to={'./products'}>
                        <button id="bannerShop">Shop our cards</button>
                    </Link>
                </div>
                <div id="bannerInfo">
                    <div className="storeInfo">
                        <img src={freeShip} alt="free shipping logo"/>
                        <p>Free shipping on US orders above $50</p>
                    </div>
                    <div className="storeInfo">
                        <img src={securedPay} alt="secure payment logo"/>
                        <p>Fast and Easy, 100% secure payment</p>
                    </div>
                    {currentUser ? null : (<div id="bannerButtons">
                        <Link to={'/login'}><button>Login</button></Link>
                        <Link to={'/register'}><button>Register Now</button></Link>
                    </div>)}
                </div>
                <hr/>
                <div id="homeCards">
                    <h2 id="homeCardsTitle">From our RARE HOLO Collection</h2>
                    <div className="productsContainer">
                        {randomCards.length > 0 ? randomCards.map(card => <ViewCard card={card} key={card.cardId}/>) : 'Loading...'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;