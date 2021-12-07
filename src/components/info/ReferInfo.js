import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';


function ReferInfo({id, title, desc1, desc2, definition, element, tag, version, view, use}){
    return(
        <li>
            <Link to = {{ pathname: "refer-detail", state: {id, title, desc1, desc2, definition, element, tag, version, view, use}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{use}</span>
            </Link>
        </li>
    )
}
ReferInfo.propTypes = {
    id : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    desc1 : Proptypes.string.isRequired,
    desc2 : Proptypes.string.isRequired,
    definition : Proptypes.array.isRequired,
    element : Proptypes.string.isRequired,
    tag : Proptypes.string.isRequired,
    version : Proptypes.string.isRequired,
    view : Proptypes.string.isRequired,
    use : Proptypes.string.isRequired,
}

export default ReferInfo;

