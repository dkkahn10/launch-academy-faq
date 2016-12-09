import React from 'react';

const Question = props => {

  let optionalAnswer = null;
  let cool_button;

  if (props.selected) {
    optionalAnswer = props.answer
    cool_button = "fa fa-fire red"
  } else {
    cool_button = "fa fa-flash orange"
  }

  return (
    <li>
      <button onClick={props.handleClick}>
        <i className={cool_button} aria-hidden="true"></i>
      </button>
      <h3 className="grey"> {props.question}</h3>
      <p>{optionalAnswer}</p>
    </li>
  )
};

export default Question;
