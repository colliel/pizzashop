import React, {useEffect} from "react";
import {connect} from "react-redux"
import {checkCart, fetchGood} from "../state/actions";
import {Loader} from "../components/Loader";

const Good = ({goodId, good, loading, fetchGood, handleAddToCart}) => {
    useEffect(() => {
        fetchGood(goodId)
    }, [])

    const userId = 1
    return(
        <div className="single_top row col-9">
            {loading ? <Loader/> :
                <>
                    <div className="images_3_of_2 col">
                        <img className="chain" src={`../pizza/${good.name}.jpg`} alt={good.name}/>
                    </div>
                    <div className="desc1 span_3_of_2 col">
                        <h4>{good.name}</h4>
                        <div className="cart-b row justify-content-around align-items-center">
                        <div className="left-n col-3">$ {good.price}</div>
                        <div className="col-9">
                            <button
                                className="now-get get-cart"
                                onClick={() => handleAddToCart(good.hashId, userId)}
                            >ADD TO CART</button>
                        </div>
                        </div>
                        <p>{good.description}</p>
                    </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        goodId: ownProps.match.params.itemId,
        good: state.goods.good,
        loading: state.app.loading
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddToCart: (hashId, userId) => dispatch(checkCart(hashId, userId)),
    fetchGood: goodId => dispatch(fetchGood(goodId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Good)