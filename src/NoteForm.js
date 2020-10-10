import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function NoteForm(props){
  const [text, setText] = useState("");
   
  const handleChange = event => {
        setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(text);
    setText("");
  }
  return(
     <form onSubmit={handleSubmit}>
      <label htmlFor="note">New note</label>
      <div className="input-box">
         <textarea cols="40" rows="5" id="note" name="note" value={text} onChange={handleChange}/>
         <button className="send">
           <span className="material-icons">
            send
           </span>
         </button>
      </div>
     </form>
  );
}

NoteForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};
