import axios from '@/utils/axios';
import { ITask } from '@/models/Task';
import { AxiosResponse } from 'axios';

export const getAll = async (): Promise<AxiosResponse<ITask[]>> => axios.get('/task');

export const getById = async (id: number): Promise<AxiosResponse<ITask>> => axios.get(`/task/${id}`);

export const create = async (payload: ITask): Promise<AxiosResponse<ITask>> => axios.post('/task', payload);

export const update = async (id: number, payload: ITask): Promise<AxiosResponse<ITask>> => axios.put(`/task/${id}`, payload);

export const deleteTask = async (id: number): Promise<AxiosResponse<void>> => axios.delete(`/task/${id}`);
