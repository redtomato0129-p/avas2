'use client';

import { Modal } from '@/components/ui/Modal';
import { AgentForm } from './AgentForm';
import type { Agent } from '@/types/agent';

interface CreateAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (agent: Omit<Agent, 'id'>) => void;
}

export function CreateAgentModal({ isOpen, onClose, onSubmit }: CreateAgentModalProps) {
  return (
    <Modal
      title="Create New Agent"
      isOpen={isOpen}
      onClose={onClose}
    >
      <AgentForm
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}