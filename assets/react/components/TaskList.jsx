// assets/react/components/TaskList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/api/tasks');
                setTasks(response.data['hydra:member']);
            } catch (error) {
                console.error("Erreur lors de la récupération des tâches", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Liste des tâches</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.isDone ? 'Terminée' : 'En cours'}
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
