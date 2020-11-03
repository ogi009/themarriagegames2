import React from 'react';

const DetailsPage = ({props}) => {
    return (
        <>
            <ul style={{padding: "1rem"}}>
                {props.map((e, i) => <li style={{borderBottom: "1px dotted black", listStyle: "disc"}}
                                           className="details_container-list" key={i}>{e} </li>)}
            </ul>
        </>
    );
};

export default DetailsPage;