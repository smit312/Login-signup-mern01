import axios from "axios";
const url = "http://localhost:8000/users";

export const addUser = async (user) => {
  return await axios.post(`${url}/add`, user);
};
export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/getuser/${id}`);
  // return await axios.get(`${url}`);
};
export const loginUser = async (user) => {
  return await axios.post(`${url}/login`, user);
};
export const Adminlogin = async (admin) => {
  return await axios.post(`${url}/admin`, admin);
};
export const GetAllusers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const AddItems = async (formdata) => {
  return await axios.post(`${url}/additem`, formdata);
};
export const getitem = async (id) => {
  return await axios.get(`${url}/getitems`);
};
export const getitemBYID = async (id) => {
  return await axios.get(`${url}/getitems/${id}`);
};
export const deleteitem = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
export const edititem = async (id, formdata) => {
  return await axios.put(`${url}/getitems/${id}`, formdata);
};
