import React from "react";
import { AddData } from "./AddData";

const Button = ({ color, children }) => {
    console.log(color);
    console.log(children);

    const data = React.Children.toArray(children);
    // React.Children.count();
    // Children.prop.children

    console.log(data);

    return (
        <>
            {data.map(info => {
                return (
                    <React.Fragment>
                        {info.props.children == 'login' ? (<><AddData />
                            <button className={color}>
                                {info.props.children}
                            </button> </>) : ('')}
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default Button;