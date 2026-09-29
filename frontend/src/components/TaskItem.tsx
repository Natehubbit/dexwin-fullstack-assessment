import { useState, useEffect } from 'react';

const PRIORITY = {
  1: { label: 'High', cls: 'high' },
  2: { label: 'Medium', cls: 'medium' },
  3: { label: 'Low', cls: 'low' },
};

export default function TaskItem({ task, onToggle }) {
  const [data, setData] = useState(task);

  useEffect(() => {
    setData(task);
  }, [task]);

  const done = data.status === 'DONE';
  const statusLabel = (data.status || '').replace('_', ' ').toLowerCase();
  const priority = PRIORITY[data.priority];

  return (
    <div className={'task-card' + (done ? ' done' : '')}>
      <div className="task-main">
        <span className="task-title">{data.title}</span>
        <div className="task-meta">
          <span className={'status-badge status-' + (data.status || '').toLowerCase()}>
            {statusLabel}
          </span>
          {data.priority != null && (
            <span className={'priority-pill' + (priority ? ' priority-' + priority.cls : '')}>
              {priority ? priority.label : 'P' + data.priority}
            </span>
          )}
          {data.assignee && <span className="assignee-chip">{data.assignee.username}</span>}
        </div>
      </div>
      <button className="toggle-btn" onClick={() => onToggle(data)}>
        {done ? 'Reopen' : 'Complete'}
      </button>
    </div>
  );
}
