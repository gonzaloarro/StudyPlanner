export function getAxiosConfig(getState) {
  const token = getState().auth.token;
  let config = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
}
