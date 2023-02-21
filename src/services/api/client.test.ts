import { getRequest } from "./client";

describe("API client", () => {
  beforeAll(() => {
    jest.spyOn(window, "fetch");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET request", () => {
    it("executes a GET request", async () => {
      (window.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      await getRequest("/testurl");

      expect(window.fetch).toHaveBeenCalledWith("/testurl", {
        headers: {},
        method: "GET",
      });
    });

    it("requests and receives JSON ", async () => {
      const mockedResponseValue = {
        ok: true,
        json: async () => ({ testValue: "123" }),
        Headers: {
            "content-type": "application/json"
        }
      };

      (window.fetch as jest.Mock).mockResolvedValueOnce(mockedResponseValue);

      const response = await getRequest("/testurl", true);

      expect(window.fetch).toHaveBeenCalledWith("/testurl", {
        headers: { Accept: "application/json" },
        method: "GET",
      });

      expect(response).toBe((mockedResponseValue));
    });
  });
});
