import React from "react";
import { useState } from "react";
import Name from "./Name";

const ListOfNames = props => {

    let [gender, setGender] = useState("yellow");

    return (
        <div className="my-2">
            {props.data.map(record => {
                gender = record.sex === "f" ? "yellow" : "grey";
                return <Name key={record.id} name={record.name} color={gender} />
            })}
        </div>
    )
}

export default ListOfNames;