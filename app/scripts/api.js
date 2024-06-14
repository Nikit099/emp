import axios from "axios";

export const fetchTypes = () => axios.get('http://localhost:4000/typePlants');
export const fetchTypeById = (id) => axios.get(`/typePlants/${id}`);
export const createPlant = (data) => axios.post('/plants', data);
export const fetchPlants = () => axios.get('/plants');
export const fetchPlantById = (id) => axios.get(`/plants/${id}`);
export const deletePlant = (id) => axios.delete(`/plants/${id}`);
export const updatePlantName = (id, name) => axios.patch(`/plants/${id}`, { name });
export const updatePlantType = (id, typeId) => axios.patch(`/plants/${id}`, { typeId });
export const updateCustomNorms = (id, norms) => axios.put(`/customNorms/${id}`, { norms });

export const fetchUserSettings = () => axios.get('/settings');
export const updateUserName = (name) => axios.patch('/settings/username', { name });
export const updateUserLogin = (login) => axios.patch('/settings/login', { login });
export const updateUserPassword = (password) => axios.patch('/settings/password', { password });

export const loginUser = (email, password) => axios.post('/auth/login', { email, password });
export const registerUser = (name, email, password) => axios.post('/auth/register', { name, email, password });
export const logoutUser = () => axios.post('/auth/logout');