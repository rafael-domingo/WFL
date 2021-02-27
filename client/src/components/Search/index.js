import React from 'react';
import './Search.css';

function Search({onChange}) {
    const [search, setSearch] = React.useState();

    return (
        <div className="container-form">
            <div className="form">
            <input name="location" type="text" placeholder="Where do you want to get lunch?" onChange={(e) => setSearch(e.target.value)}></input>
            <label htmlFor="location" className="label-name">
                <span className="content-name">Where do you want to get lunch?</span>
            </label>
            <button onClick={onChange(search)}>Search</button>
            </div>
      </div>     
    )
}

export default Search;