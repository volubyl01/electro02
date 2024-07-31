/*import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import TaskManager from './components/TaskManager';


// any CSS you import will output into a single css file 
import '../styles/app.css';

/*
const container = document.getElementById('task-manager');
const root = createRoot(container);
root.render(<TaskManager />);

On récrit en introduisant un EventListener*/

// Wrap the rendering logic in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('task-manager');
    if (container) {
      const root = createRoot(container);
      root.render(
        <React.StrictMode>
          <TaskManager />
        </React.StrictMode>
      );
    } else {
      console.error("Container element with id 'task-manager' not found");
    }
  });
