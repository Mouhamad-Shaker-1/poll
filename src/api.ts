
import axios, { AxiosResponse } from 'axios';

export const getOnePoll = async (idPoll: any): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.get(`https://test.omar.rs4it.com/poll/${idPoll}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
};

export const sendFormDateClient = async (dataForm: any): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post('https://test.omar.rs4it.com/solve', dataForm)
    return response
  } catch (error: any) {
    throw new Error(error)
  }
}


export const sendFormLogin = async (dataForm: any): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post('https://test.omar.rs4it.com/auth', dataForm);
    return response;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "خطأ في السيرفر");
    } else if (error.request) {
      throw new Error("لم يتم تلقي استجابة من السيرفر");
    } else {
      throw new Error("خطأ في إعداد الطلب: " + error.message);
    }
  }
};

export const createNewPoll = async (dataForm: any): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post('https://test.omar.rs4it.com/poll', dataForm);
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
};

export const deletePollFromAPI = async (idPoll: any): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.delete(`https://test.omar.rs4it.com/poll/${idPoll}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
};

export const getAllPollsInfo = async (): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.get('https://test.omar.rs4it.com/poll');

    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }

};