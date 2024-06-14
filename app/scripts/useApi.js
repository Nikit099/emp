import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  fetchTypes,
  fetchTypeById,
  createPlant,
  fetchPlants,
  fetchPlantById,
  deletePlant,
  updatePlantName,
  updatePlantType,
  updateCustomNorms,
  fetchUserSettings,
  updateUserName,
  updateUserLogin,
  updateUserPassword,
  loginUser,
  registerUser,
  logoutUser,
} from './api';

export const useFetchTypes = () => useQuery('types', fetchTypes);
export const useFetchTypeById = (id) => useQuery(['type', id], () => fetchTypeById(id));

export const useCreatePlant = () => {
  const queryClient = useQueryClient();
  return useMutation(createPlant, {
    onSuccess: () => queryClient.invalidateQueries('plants'),
  });
};

export const useFetchPlants = () => useQuery('plants', fetchPlants);
export const useFetchPlantById = (id) => useQuery(['plant', id], () => fetchPlantById(id));

export const useDeletePlant = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePlant, {
    onSuccess: () => queryClient.invalidateQueries('plants'),
  });
};

export const useUpdatePlantName = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePlantName, {
    onSuccess: (data, variables) => queryClient.invalidateQueries(['plant', variables.id]),
  });
};

export const useUpdatePlantType = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePlantType, {
    onSuccess: (data, variables) => queryClient.invalidateQueries(['plant', variables.id]),
  });
};

export const useUpdateCustomNorms = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCustomNorms, {
    onSuccess: (data, variables) => queryClient.invalidateQueries(['plant', variables.id]),
  });
};

export const useFetchUserSettings = () => useQuery('userSettings', fetchUserSettings);
export const useUpdateUserName = () => useMutation(updateUserName);
export const useUpdateUserLogin = () => useMutation(updateUserLogin);
export const useUpdateUserPassword = () => useMutation(updateUserPassword);

export const useLoginUser = () => useMutation(loginUser);
export const useRegisterUser = () => useMutation(registerUser);
export const useLogoutUser = () => useMutation(logoutUser);