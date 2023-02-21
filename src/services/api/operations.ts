import osmtogeojson from "osmtogeojson";
import { getRequest } from "./client";
import endpoints, { GetMapDataByBoundingBoxParams } from "./endpoints";

const fetchMapDataByBoundingBox = async (
  params: GetMapDataByBoundingBoxParams
) => {
  const url = endpoints.GET.getMapDataByBoundingBox(params);

  const osmData = await getRequest(url, true)
  
  return osmtogeojson(osmData);
};

export { fetchMapDataByBoundingBox };
