import { base } from "../../a.js";
import axios from "axios";

export const apiRequest = async (uri, type, payload) => {
    try {
        const url = base + uri;
        let result;
        switch (type) {
            case "get":
                result = await axios.get(url);
                break;
            case "post":
                result = await axios.post(url, payload, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                break;
            default:
                break;
        }
        return result.data;
    } catch (err) {
        return err.message;
    }
};
