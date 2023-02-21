const getRequest = async (url: string, json?: boolean) => {
  const options = {
    method: "GET",
    headers: {},
  };

  if (json) {
    options.headers = {
      Accept: "application/json",
    };
  }

  try {
    const response = await fetch(url, options);

    if (response) {
      if (response.headers?.get("content-type")?.includes("application/json")) {
        return await response.json();
      }

      return response;
    }
  } catch {}
};

export { getRequest };
