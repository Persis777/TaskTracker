export interface IStep {
  id: number;
  planId: number;
  stepNumber: number;
  plan: string;
}

export interface IPlan {
  id: number;
  title: string;
  creationDate: string;
  userTaskId: number;
  userTask: string;
  steps: IStep[];
}

export interface ITask {
  id?: number | undefined;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  status: string;
  plan?: IPlan;
}
