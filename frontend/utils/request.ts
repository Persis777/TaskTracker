import axios from '@/utils/axios';
import { ApiRequest } from '@/api';
import { AxiosResponse } from 'axios';

const formatRequest = <T>(
  request: ApiRequest,
  payload?: any
): Promise<AxiosResponse<T>> => axios[request.method](request.url, payload)
  .then((response) => response)
  .catch((error) => {
    throw error;
  });

export default formatRequest;
