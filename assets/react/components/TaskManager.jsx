// assets/react/components/TaskManager.jsx
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskManager = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleTaskAdded = () => {
        setRefreshKey(oldKey => oldKey + 1);
    };

    return (
        <div>
            <h1>Gestionnaire de tâches</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList key={refreshKey} />
        </div>
    );
};

export default TaskManager;
