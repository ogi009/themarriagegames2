import React from 'react';

const User1DetailsPage = ({props}) => {
    console.log(props);
    return (
        <>
            <ul style={{padding: "1rem"}}>
                {props.length > 0 ? props.map((e, i) => <li style={{ listStyle: "disc"}}
                                           className="details_container-list" key={i}>{e} </li>): null}
            </ul>
        </>
    );
};

export default User1DetailsPage;