import apiCalls from "./nyTimesService";
import {
  jest,
  describe,
  test,
  expect,
  global,
} from "@testing-library/jest-dom";

jest.spyOn(global, "fetch");

describe("apiCalls Service", () => {
  test("getMostPopularArticles fetches data correctly", async () => {
    const mockResponse = {
      status: "OK",
      results: [{ id: 1, title: "Test Article" }],
    };
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => mockResponse,
    });

    const data = await apiCalls.getMostPopularArticles();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=D1NckhzDRRGYUAewi47GHYUlwAlJQNGT"
    );
    expect(data).toEqual(mockResponse);
  });
});
