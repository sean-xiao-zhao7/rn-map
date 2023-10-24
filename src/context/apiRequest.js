import { base } from "../../a.js";
import axios from "axios";

export const apiRequest = async (uri, type, payload, jwt = "") => {
    try {
        const url = base + uri;
        let result;
        switch (type) {
            case "get":
                result = await axios.get(url);
                break;
            case "post":
                let headers = {
                    "Content-Type": "application/json",
                };
                if (jwt !== "") {
                    headers["Authorization"] = `Bearer ${jwt}`;
                }
                result = await axios.post(url, payload, {
                    headers,
                });
                break;
            default:
                throw new Error("Type not supported error");
        }
        return result.data;
    } catch (err) {
        return err.message;
    }
};
