import formatRequest from '@/utils/request';
import { ITask } from '@/models/Task';
import { AxiosResponse } from 'axios';

export const getTasks = () => formatRequest({
  url: '/task',
  method: 'get'
});

export const createTask = (payload: ITask): Promise<AxiosResponse<ITask>> => formatRequest({
  url: '/task',
  method: 'post'
}, payload);

export const updateTask = (payload: ITask): Promise<AxiosResponse<ITask>> => formatRequest({
  url: `/task/${payload.id}`,
  method: 'put'
}, payload);

export const deleteTask = (id: number): Promise<AxiosResponse<boolean>> => formatRequest({
  url: `/task/${id}`,
  method: 'delete'
});

