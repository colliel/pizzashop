import React, {useEffect} from "react";
import {connect} from "react-redux"
import {fetchGood} from "../state/actions";
import {Loader} from "../components/Loader";

const Good = ({goodId, good, dispatch, loading}) => {
    useEffect(() =>{
        dispatch(fetchGood(goodId))
    }, [])

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
                            <a className="now-get" href="#">ADD TO CART</a>
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

export default connect(mapStateToProps)(Good)