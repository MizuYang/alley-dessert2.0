const config = useRuntimeConfig();
const { apiBaseUrl, apiPath } = config;

const frontendApiUrl = {
  getProductApi: `/api/${apiPath}/products/all`,
};
