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
    
    if (response && response.ok) {
      if (response.headers?.get("content-type")?.includes("application/json")) {
        return await response.json();
      }

      return response;
    } else {
      throw new Error()
    }
  } catch {
    throw new Error()
  }
};

export { getRequest };
