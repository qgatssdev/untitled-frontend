import { useQuery } from 'hooks/useQuery';
import { api } from 'lib/api';
import { Employee } from './types';

export function useGetEmployeeDetails() {
  const employee = useQuery<Employee>('employees/details', api.get);

  return employee;
}

export function useAssignedGetWorkflowDetails(workflowId: string) {
  const workflows = useQuery(
    `onboarding-workflow/assign/${workflowId}`,
    api.get
  );

  return workflows;
}
