import React from 'react';
import PropTypes from 'prop-types';

export function Note(props) {
    return(
        <div className="note">
          <button className="close" onClick={() => props.handleDelete(props.id)}>
          <span class="material-icons">
           close
          </span>
         </button>
         <p>{props.content}</p>
        </div>
    );
}

Note.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
