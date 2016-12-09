import React from 'react';
import QuestionList from './QuestionList'

const App = props => {
  return (
    <div>
      <h1 className="center_text blue">We Are Here To Help</h1>
      <QuestionList
        questions={props.data}/>
    </div>
  )
};

export default App;
