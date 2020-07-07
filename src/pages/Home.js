import React, {useEffect} from "react";
import {Goods} from "../components/Goods";
import {Loader} from "../components/Loader"
import {connect} from "react-redux"
import {fetchGoods} from "../state/actions";

const Home = ({loading, goods, dispatch}) => {

    useEffect(() => {
        dispatch(fetchGoods())
        // eslint-disable-next-line
    }, [])

    return(
        <div className="col">
            {loading ? <Loader/> :
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                     <Goods goods={goods}/>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.app.loading,
        goods: state.goods.goods
    }
}

export default connect(mapStateToProps)(Home)