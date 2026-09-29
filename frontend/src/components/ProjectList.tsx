import { useEffect, useState, useCallback } from 'react';
import { getProjects } from '../api/client';

export default function ProjectList({ selectedProjectId, onSelect }) {
  const [projects, setProjects] = useState([]);

  const getProjectsResult = useCallback( async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, []);

  useEffect(() => {
    getProjectsResult();
  }, []);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <button
          type="button"
          key={project.id}
          className={
            'project-item' + (project.id === selectedProjectId ? ' active' : '')
          }
          onClick={() => onSelect(project.id)}
        >
          <span className="project-name">{project.name}</span>
          {project.description && (
            <span className="project-desc">{project.description}</span>
          )}
        </button>
      ))}
    </div>
  );
}
