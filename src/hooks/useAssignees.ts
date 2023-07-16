import { ASSIGNEE_ITEMS } from '@/const/assignee';

/**
 * TODO: 固定値を返さないように修正する
 */
export const useAssignees = () => {
  return { assignees: ASSIGNEE_ITEMS };
};
