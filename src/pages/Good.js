import React from "react";

export const Good = () => {
    return(
        <div className=" single_top">
            <div className="single_grid">
                <div className="grid images_3_of_2">
                    <ul id="etalage">
                        <li>
                            <a href="optionallink.html">
                                <img className="etalage_thumb_image" src="images/s4.jpg" className="img-responsive"/>
                                <img className="etalage_source_image" src="images/si4.jpg" className="img-responsive"
                                     title=""/>
                            </a>
                        </li>
                        <li>
                            <img className="etalage_thumb_image" src="images/s2.jpg" className="img-responsive"/>
                            <img className="etalage_source_image" src="images/si2.jpg" className="img-responsive"
                                 title=""/>
                        </li>
                        <li>
                            <img className="etalage_thumb_image" src="images/s3.jpg" className="img-responsive"/>
                            <img className="etalage_source_image" src="images/si3.jpg" className="img-responsive"/>
                        </li>
                        <li>
                            <img className="etalage_thumb_image" src="images/s1.jpg" className="img-responsive"/>
                            <img className="etalage_source_image" src="images/si1.jpg" className="img-responsive"/>
                        </li>
                    </ul>
                    <div className="clearfix"/>
                </div>
                <div className="desc1 span_3_of_2">


                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                    <div className="cart-b">
                        <div className="left-n ">$329.58</div>
                        <a className="now-get get-cart-in" href="#">ADD TO CART</a>
                        <div className="clearfix"/>
                    </div>
                    <h6>100 items in stock</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                </div>
                <div className="clearfix"/>
            </div>
        </div>
    )
}