// TaskManager.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskForm from './TaskForm';



const TaskManager = () => {
    const [tasks, setTasks] = useState([]);// initialisé comme un tableau vide
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/api/tasks');
                // Ajout d'un délai artificiel de 1 seconde
                await new Promise(resolve => setTimeout(resolve, 1000));
                const tasksData = response.data['hydra:member'] || [];
                console.log('Tâches récupérées:', tasksData); // Log pour déboguer
                setTasks(tasksData);
            } catch (error) {
                console.error("Erreur lors du chargement des tâches", error);
                setError('Erreur lors du chargement des tâches');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    console.log('TaskManager rendu, nombre de tâches:', tasks.length); // Log pour déboguer

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Gestionnaire de tâches</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default TaskManager;
