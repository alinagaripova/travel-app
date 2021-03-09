import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//TODO: normal display
function Country({ countries }) {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const index = countries && countries.findIndex(item => item.id == id);
        setData(countries[index]);
    }, [countries]);

    return (
        <div>
            {data?.country}
        </div>
    );
}

export default Country;