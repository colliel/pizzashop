import React, {useEffect} from "react";
import {Goods} from "../components/Goods";
import {Loader} from "../components/Loader"
import {connect} from "react-redux"

const Home = ({loading, goods}) => {

    useEffect(() => {
        fetchGoods()
        // eslint-disable-next-line
    }, [])

    return(
        <div className="col-9">
            <div className="row row-cols-3">
                {loading ? <Loader/> : <Goods goods={goods}/>}
            </div>
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