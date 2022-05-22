import { useEffect, useState } from "react";

const useParts = () => {
    const [part, setPart] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/parts`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPart(data)
        })
    }, [])
    return [part];
};

export default useParts;