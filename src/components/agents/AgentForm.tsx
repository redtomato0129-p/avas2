'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import type { Agent } from '@/types/agent';

interface AgentFormProps {
  onSubmit: (agent: Omit<Agent, 'id'>) => void;
  onCancel: () => void;
}

export function AgentForm({ onSubmit, onCancel }: AgentFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    prompt: '',
    voiceId: 'default',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Agent Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
          Prompt
        </label>
        <textarea
          id="prompt"
          value={formData.prompt}
          onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label htmlFor="voice" className="block text-sm font-medium text-gray-700">
          ElevenLabs Voice
        </label>
        <select
          id="voice"
          value={formData.voiceId}
          onChange={(e) => setFormData({ ...formData, voiceId: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="default">Default Voice</option>
          <option value="voice1">Voice 1</option>
          <option value="voice2">Voice 2</option>
          <option value="voice3">Voice 3</option>
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Create Agent
        </Button>
      </div>
    </form>
  );
}