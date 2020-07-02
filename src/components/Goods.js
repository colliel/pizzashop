import React from "react";
import {Item} from "./Item";

export const Goods = ({goods}) => {
    return(
        <>
            {goods.map(good => (
                <Item key={good.id} item={good}/>
            ))}
        </>
    )
}