import * as api from "../callApi";

const productService = {
    getProducts:async function(){
        return api.getApi(process.env.REACT_APP_API + `Products`);
    }
}
export default productService;
