import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleStatus, onDelete, filter, onFilterChange }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100">My Tasks <span className="text-slate-500 text-lg">({filteredTasks.length})</span></h2>
        <div className="w-full md:w-auto flex gap-1 bg-slate-950 p-1 rounded-lg overflow-x-auto no-scrollbar scroll-smooth">
          {['All', 'Pending', 'Completed'].map((tab) => (
            <button
              key={tab}
              className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap ${filter === tab
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-100'
                }`}
              onClick={() => onFilterChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-16 px-4">
          <svg className="w-16 h-16 mx-auto mb-4 text-slate-700 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-lg text-slate-400 mb-1 font-medium">No tasks found</p>
          <p className="text-sm text-slate-600">
            {filter === 'All'
              ? 'Create your first task to get started!'
              : `No ${filter.toLowerCase()} tasks`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {filteredTasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onToggleStatus={onToggleStatus}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
