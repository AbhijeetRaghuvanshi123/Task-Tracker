import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  onToggleStatus,
  onDelete,
  filter,
  onFilterChange,
  priorityFilter,
  onPriorityChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange
}) => {
  const filteredTasks = tasks
    .filter(task => {
      const matchesStatus = filter === 'All' || task.status === filter;
      const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesPriority && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
      if (sortBy === 'priority') {
        const priorities = { High: 3, Medium: 2, Low: 1 };
        return priorities[b.priority] - priorities[a.priority];
      }
      return 0;
    });

  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800">
      <div className="space-y-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
            My Tasks <span className="text-slate-500 text-lg">({filteredTasks.length})</span>
          </h2>

          <div className="w-full sm:w-64 relative">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all"
            />
            <svg className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between border-t border-slate-800/50 pt-6">
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Status:</span>
            <div className="flex gap-1 bg-slate-950 p-1 rounded-lg w-full xs:w-auto overflow-x-auto no-scrollbar">
              {['All', 'Pending', 'Completed'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 xs:flex-none px-3 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${filter === tab
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

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 flex-1 sm:flex-none">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Priority:</span>
              <select
                value={priorityFilter}
                onChange={(e) => onPriorityChange(e.target.value)}
                className="w-full xs:w-auto bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all"
              >
                <option value="All">All Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 flex-1 sm:flex-none">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full xs:w-auto bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="dueDate">Due Date</option>
                <option value="priority">Priority (High)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-16 px-4">
          <svg className="w-16 h-16 mx-auto mb-4 text-slate-700 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-lg text-slate-400 mb-1 font-medium">No tasks found</p>
          <p className="text-sm text-slate-600">
            {searchQuery
              ? `No results for "${searchQuery}"`
              : 'Try adjusting your filters'}
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
