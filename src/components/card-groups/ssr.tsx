import Api, { AllParams, ApiResponse, Collections } from "@/libs/api";
import { useDispatch} from "react-redux";
import {  setProducts } from "@/redux/products/reducer";
import { Singleitem } from "./general";
async function Ssr() {
  const dispatch = useDispatch();
  async function fetchProductsHandler() {
    const api = new Api();
    const params: AllParams = {
      collection: Collections.Products, // Replace with actual collection
      page: 1, // Example: Always start with page 1
      perPage: 10, // Example: Number of items per page
    };
    const result: ApiResponse = await api.getPaginatedList(params);
    dispatch(setProducts(result));
    return result.items;
  }

  const items: [] = await fetchProductsHandler();
  return (
    <>
      {items?.slice(0, 3).map((item, index) => (
        <Singleitem key={index} item={item} index={index} />
      ))}
    </>
  );
}
export default Ssr