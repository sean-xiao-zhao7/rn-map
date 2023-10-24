import createDataContext from "./createDataContext";
import { apiRequest } from "./apiRequest";

// reducer
const tracksReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRACK":
            const newTrack = {
                tripId: action.payload.tripId,
                name: action.payload.name,
                coordinates: [action.payload.initialCoordinates],
            };
            return {
                ...state,
                tracks: {
                    ...state.tracks,
                    tripId: newTrack,
                },
            };
        case "GET_TRACKs":
            return {
                ...state,
                tracks: action.payload.tracks,
            };
        case "ERROR":
            return {
                ...state,
                error: action.payload.error,
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

// actions
const addTrackAction = (dispatch) => {
    return async (payload) => {
        if (payload.name === "" || payload.lat === "" || payload.long === "") {
            dispatch({
                type: "ERROR",
                payload: { error: "Some required field(s) is empty." },
            });
        } else {
            let result = await apiRequest("/add-trip", "post", payload);

            if (typeof result === "object") {
                dispatch({
                    type: "ADD_TRACK",
                    payload: {
                        tripId: result.tripId,
                        name: payload.name,
                        lat: payload.lat,
                        long: payload.long,
                    },
                });
            } else {
                if (result.includes("401")) {
                    result = "Not authorized.";
                } else {
                    result = "Server error.";
                }
                dispatch({
                    type: "ERROR",
                    payload: { error: result },
                });
            }
        }
    };
};

const getTracksAction = (dispatch) => {
    return async () => {
        let result = await apiRequest("/get-trips", "get");
        if (typeof result === "object") {
            dispatch({
                type: "GET_TRACKS",
                payload: {
                    tracks: result,
                },
            });
        } else {
            if (result.includes("401")) {
                result = "Not authorized.";
            } else {
                result = "Server error.";
            }
            dispatch({
                type: "ERROR",
                payload: { error: result },
            });
        }
    };
};

const clearErrorAction = (dispatch) => {
    return () => {
        dispatch({ type: "CLEAR_ERROR" });
    };
};

export const { Context, Provider } = createDataContext(
    tracksReducer,
    {
        addTrackAction,
        getTracksAction,
        clearErrorAction,
    },
    {
        tracks: {},
        error: null,
    }
);
