import React, { useState } from "react";

const Name = props => {

    return (
        <span className="btn m-1" style={{background: props.color}}>{props.name}</span>
    )
}

export default Name;