import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbidden = ["fuck", "porno", "php"];

export function badWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((word) =>
          action.payload.title.includes(word)
        );
        if (found.length) {
          return dispatch(showAlert("Пожалуйста, не используйте это слово"));
        }
      }
      return next(action);
    };
  };
}
