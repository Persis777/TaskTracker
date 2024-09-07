import axios from '@/utils/axios';
import { ApiRequest } from '@/api';
import { AxiosResponse } from 'axios';

const formatRequest = <T>(
  request: ApiRequest,
  payload?: unknown
): Promise<AxiosResponse<T>> => axios[request.method](request.url, payload);

export default formatRequest;
