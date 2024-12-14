'use client';

import { List, Grid } from 'lucide-react';

interface ViewModeToggleProps {
  viewMode: 'list' | 'grid';
  onViewModeChange: (mode: 'list' | 'grid') => void;
}

export function ViewModeToggle({ viewMode, onViewModeChange }: ViewModeToggleProps) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onViewModeChange('list')}
        className={`p-2 rounded-md ${
          viewMode === 'list' 
            ? 'bg-white shadow-sm text-indigo-600' 
            : 'text-gray-600'
        }`}
      >
        <List className="h-5 w-5" />
      </button>
      <button
        onClick={() => onViewModeChange('grid')}
        className={`p-2 rounded-md ${
          viewMode === 'grid' 
            ? 'bg-white shadow-sm text-indigo-600' 
            : 'text-gray-600'
        }`}
      >
        <Grid className="h-5 w-5" />
      </button>
    </div>
  );
}