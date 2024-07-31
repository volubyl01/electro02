// TaskList.jsx
import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => {
    console.log('TaskList reçoit:', tasks);

    if (!tasks || tasks.length === 0) {
        return <p>Aucune tâche à afficher.</p>;
    }

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default TaskList;

