import axios from "axios";

export const createAndUpdateUser = async (authToken) => {
  return axios.post(
    `${import.meta.env.VITE_APP_API}/auth`,
    {},
    {
      headers: {
        authToken,
      },
    },
  );
};
