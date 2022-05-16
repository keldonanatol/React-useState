import React, { useState} from "react"

function CoinTossCounter() {
    const [results, setResults] = useState([]);
    const [counts, setCounts] = useState({ H: 0, T: 0})
    const handleClick = (value) => {
        setResults([...results, value]);//...use spread operator for all contents of existing results
        setCounts({
            ...counts,
            [value]: counts[value] + 1,
        });
    };

    const handleDeleteLast = () => {
        const last = results[results.length - 1];
        const list = results.slice(0, -1);

        setResults(list);
        if (last) {
            setCounts({
                ...counts,
                [last]: counts[last] - 1,
            });
        }
    };

    //const deleteToss = (indexToDelete) => {
    //    setResults((currrentResults) => 
    //    currrentResults.filter((ignored, index) => index != indexToDelete)//deleting the index of the element
    //    );
    //};

    //const deleteUser = (idToDelete) => {
    //    setUsers((currentUsers) => 
    //    currentUsers.filter((user) => user.id !== idToDelete)//deleting by id
    //    );
    //};

    //const list = results.map((result, index) => (
    //    <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
    //))
    
    return (
        <section>
            <div>
                <button onClick={() => handleClick("H")}>Heads</button>
                <button onClick={() => handleClick("T")}>Tails</button>
            </div>
            <button onClick={handleDeleteLast}>Delete Last</button>
            <ul>
                <li>Heads: {counts["H"]}</li>
                <li>Tails: {counts["T"]}</li>
            </ul>
        </section>
    )
}

export default CoinTossCounter;