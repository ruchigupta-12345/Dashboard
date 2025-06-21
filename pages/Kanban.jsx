import React from 'react';
import '../styles/App.css';

const kanbanData = {
  todo: [
    { id: 1, task: 'Design UI for dashboard' },
    { id: 2, task: 'Fix sidebar toggle bug' }
  ],
  inProgress: [
    { id: 3, task: 'Develop charts module' }
  ],
  done: [
    { id: 4, task: 'Set up routing' },
    { id: 5, task: 'Create login page' }
  ]
};

function KanbanPage() {
  return (
    <div className="kanban-page">
      <h2>Kanban Board</h2>
      <div className="kanban-board">
        {Object.entries(kanbanData).map(([status, tasks]) => (
          <div key={status} className="kanban-column">
            <h3 className="kanban-title">{status.toUpperCase()}</h3>
            {tasks.map(task => (
              <div key={task.id} className="kanban-task">
                {task.task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanPage;