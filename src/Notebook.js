import React from 'react';
import { Note } from './Note';
import { NoteForm } from './NoteForm';


export class Notebook extends React.Component{
    state = {
        notes: []
    };

    handleUpdate = () => {
        fetch('http://localhost:7777/notes', {
            method:"GET"
            })
        .then(response => response.json())
        .then(data => this.setState({ notes:data }));
    }

    handleCreate = (text) => {
         const note = {
            id: 0,
            content: text
        };
        fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        .then(() => {
           return this.handleUpdate()});
    }

    handleDelete = (id) => {
        fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
           return this.handleUpdate()});
    }

   componentDidMount(){
       this.handleUpdate();
   }

   render(){
        return(
           <>
            <h1>Notes
                <button className="update" onClick={this.handleUpdate}>
                  <span class="material-icons">
                   cached
                  </span>
                </button>
            </h1>
            <div className="notes">
               {this.state.notes.map((note) =>
                <Note {...note}
                      key={note.id}
                      handleDelete={this.handleDelete} />
               )}
            </div>
            <NoteForm handleSubmit={this.handleCreate} />
           </>
        );
   }
}
