import * as task from './task';

export type Method = 'get' | 'post' | 'put' | 'delete';

export interface ApiRequest {
  url: string;
  method: Method;
}

const api = {
  task
};

export default api;
