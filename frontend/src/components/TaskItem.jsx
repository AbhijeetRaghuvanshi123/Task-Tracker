import React from 'react';
import { format, formatDistanceToNow, isPast } from 'date-fns';

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formatted = format(date, 'MMM dd, yyyy');
    const relative = formatDistanceToNow(date, { addSuffix: true });
    const isOverdue = isPast(date) && task.status === 'Pending';

    return { formatted, relative, isOverdue };
  };

  const handleToggleStatus = async () => {
    const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
    await onToggleStatus(task._id, newStatus);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task._id);
    }
  };

  const priorityStyles = {
    low: 'bg-emerald-400/10 text-emerald-500 border-emerald-500/50',
    medium: 'bg-amber-400/10 text-amber-500 border-amber-500/50',
    high: 'bg-red-400/10 text-red-500 border-red-500/50',
  };

  const statusInfo = task.status === 'Completed'
    ? { container: 'opacity-60 grayscale-[0.2]', badge: 'bg-emerald-400/10 text-emerald-500 border-emerald-500/50' }
    : { container: 'hover:border-indigo-500/50', badge: 'bg-indigo-400/10 text-indigo-500 border-indigo-500/50' };

  const dateInfo = formatDate(task.dueDate);

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 transition-all duration-300 flex flex-col gap-3 sm:gap-4 group hover:border-indigo-500/50">
      <div className="flex flex-col xs:flex-row justify-between items-start gap-2 sx:gap-4">
        <h3 className={`text-base sm:text-lg font-semibold text-slate-100 flex-1 leading-tight break-words w-full ${task.status === 'Completed' ? 'line-through text-slate-500' : ''}`}>
          {task.title}
        </h3>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border shrink-0 ${priorityStyles[task.priority.toLowerCase()]}`}>
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2 italic break-words">{task.description}</p>
      )}

      <div className="pt-3 sm:pt-4 border-t border-slate-800 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 xs:gap-0 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="flex flex-col">
            <span className={dateInfo.isOverdue ? 'text-red-400 font-bold' : 'text-slate-300'}>
              {dateInfo.formatted}
            </span>
            <span className="text-[10px] opacity-60 hidden xs:inline-block">
              {dateInfo.relative}
            </span>
          </div>
        </div>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border self-start xs:self-auto ${statusInfo.badge}`}>
          {task.status}
        </span>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          onClick={handleToggleStatus}
          className={`flex-1 py-1.5 sm:py-2 px-3 rounded-lg text-xs font-bold transition-all active:scale-[0.98] ${task.status === 'Completed'
              ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white'
              : 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white'
            }`}
        >
          {task.status === 'Completed' ? 'Reopen' : 'Complete'}
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-1.5 sm:py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50 transition-all text-xs font-bold active:scale-[0.98]"
          aria-label="Delete task"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
