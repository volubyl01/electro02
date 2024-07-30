/*import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '/assets/js/components/App';


// Assurez-vous que l'élément avec l'ID 'root' existe dans votre HTML
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TaskManager />);

// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.css';
