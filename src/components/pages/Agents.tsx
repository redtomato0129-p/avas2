'use client';

import { useState } from 'react';
import { Users, Plus } from 'lucide-react';
import { AgentList } from '@/components/agents/AgentList';
import { CreateAgentModal } from '@/components/agents/CreateAgentModal';
import { ViewModeToggle } from '@/components/agents/ViewModeToggle';
import { Button } from '@/components/ui/Button';
import type { Agent } from '@/types/agent';

export function Agents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateAgent = (newAgent: Omit<Agent, 'id'>) => {
    const agent: Agent = {
      ...newAgent,
      id: Date.now().toString(),
    };
    setAgents([...agents, agent]);
    setIsCreating(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Users className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Agents</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <ViewModeToggle
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
          
          <Button
            onClick={() => setIsCreating(true)}
            icon={Plus}
          >
            Create an Agent
          </Button>
        </div>
      </div>

      {agents.length === 0 ? (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No agents created yet</h3>
          <p className="text-gray-500">Get started by creating your first AI agent.</p>
        </div>
      ) : (
        <AgentList agents={agents} viewMode={viewMode} />
      )}

      <CreateAgentModal
        isOpen={isCreating}
        onClose={() => setIsCreating(false)}
        onSubmit={handleCreateAgent}
      />
    </div>
  );
}