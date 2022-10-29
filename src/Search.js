import React from "react";

const Search = props => {
    return (
        <div>
            <form>
                <input type="text" onChange={props.onkeydown}/>
            </form>
        </div>
    )
}

export default Search;