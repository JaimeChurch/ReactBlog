import React from 'react';
import './App.css';
import SimplePaper from './SimplePaper';
import MotionPath from './MotionPath';
import Drag from './SpringFollow';
import UseAnimationFrame from './CubeAnimation';

function App() {
  return (
    <>
      <h1>React Blog</h1>

      <SimplePaper>
        <h3>To Do:</h3>
        <ul>
          <li>Home button</li>
          <li>Add note card styling</li>
          <li>Import questions</li>
          <li>Make answers clickable</li>
          <li>Flip animation</li>
          <li>Add topic selection</li>
          <li>Add high score table</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 1</h3>
        <ul>
          <li>Started new PMP flashcard app.</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 2</h3>
        <ul>
          <li>Created new react app.</li>
          <li>Added Flashcard.jsx and Flashcard.css. </li>
          <li>Added styling and placeholders for questions/answers.</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 3</h3>
        <ul>
          <li>Moved questions to array in separate file. </li>
          <li>Added previous, next, and flip buttons. </li>
          <li>Flip displays answer.</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 4</h3>
        <ul>
          <li>Moved questions to array in separate file. </li>
          <li>Added previous, next, and flip buttons. </li>
          <li>Flip displays answer.</li>
        </ul>
      </SimplePaper>

      <SimplePaper>
        <h3>Week 6</h3>
        <MotionPath />
      </SimplePaper>

      <SimplePaper>
        <h3>Class Demo</h3>
        <UseAnimationFrame/>
      </SimplePaper>

      <Drag />
       
    </>
  );
}

export default App;