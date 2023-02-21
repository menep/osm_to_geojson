const BASE_URL = "https://www.openstreetmap.org/api/0.6";

export type GetMapDataByBoundingBoxParams = {
  left: string;
  bottom: string;
  right: string;
  top: string;
};

const endpoints = {
  GET: {
    getMapDataByBoundingBox: ({
      left,
      bottom,
      right,
      top,
    }: GetMapDataByBoundingBoxParams) =>
      `${BASE_URL}/map?bbox=${left},${bottom},${right},${top}`,
  },
};

export default endpoints;
