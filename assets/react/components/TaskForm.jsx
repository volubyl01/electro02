// assets/react/components/TaskForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/tasks', {
                title,
                description,
                isDone: false
            });
            onTaskAdded(response.data);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error("Erreur lors de l'ajout de la tâche", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter une tâche</h2>
            <div>
                <label htmlFor="title">Titre:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TaskForm;
