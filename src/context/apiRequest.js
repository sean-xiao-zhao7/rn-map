import { base } from "../../a.js";
import { axios } from "axios";

export const apiRequest = async (uri, payload, type) => {
    try {
        const url = base + uri;
        let result;
        switch (type) {
            case "get":
                result = await axios.get(url);
                break;
            case "post":
                result = await axios.post(url, payload);
                break;
            default:
                break;
        }
        const resultJSON = result.json();
        return resultJSON;
    } catch (err) {
        console.log(err);
        return false;
    }
};
