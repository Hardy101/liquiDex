import axios from "axios";

const API_URL = "http://localhost:8000/notifications/";

export const fetchNotifications = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
 
export const sendNotification = async (title: string, message: string) => {
  const response = await axios.post(API_URL, null, {
    params: { title, message },
  });
  return response.data;
};

export const deleteNotification = async (id: number) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};

export const markNotificationAsRead = async (id: number) => {
  const response = await axios.patch(`${API_URL}${id}/read`);
  return response.data;
};
