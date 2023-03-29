import * as api from "../callApi";

const shoppingService = {
    saveShop: async function (data: any) {
        return api.postApi(process.env.REACT_APP_API + `Shopping`, data);
    }
}
export default shoppingService;
