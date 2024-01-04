import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import { XodimlarReducer } from "./XodimlarReducer";
import { Lavozimreducer } from "./LavozimReducer";
import { combineReducers } from "redux";

export const store = createStore(
    combineReducers(
        { XodimlarReducer, Lavozimreducer }
    ),
    applyMiddleware(logger)
)