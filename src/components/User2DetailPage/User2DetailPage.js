import React from 'react';

const User2DetailsPage = ({props}) => {
    return (
        <>
            <ul style={{padding: "1rem"}}>
                {props.length > 0 ? props.map((e, i) => <li style={{borderBottom: "1px dotted black", listStyle: "disc"}}
                                         className="details_container-list" key={i}>{e} </li>) : null}
            </ul>
        </>
    );
};

export default User2DetailsPage;