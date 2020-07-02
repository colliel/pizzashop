import React from "react";

export const LeftMenu = () => {
    return(
            <div className="col-3">
                <div className="top-nav">
                    <h3 className="cate">CATEGORIES</h3>
                    <ul className="menu">
                        <ul className="kid-menu ">
                            <li><a href="">Neapolitan Pizza</a></li>
                            <li><a href="">Chicago Pizza</a></li>
                            <li><a href="">Sicilian Pizza</a></li>
                            <li><a href="">Greek Pizza</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
    )
}