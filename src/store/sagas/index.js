import { all, takeLatest } from "redux-saga/effects";

import { Types as FavoriteType } from "../ducks/favorites";
import { addFavorite } from "./favorites";

export default function* rootSaga() {
    yield all([takeLatest(FavoriteType.ADD_REQUEST, addFavorite)]);
}
