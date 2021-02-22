// import { call, put, takeEvery, all } from 'redux-saga/effects';
// import * as commentAPI from '../../api/comment-api';
// import * as Action from './action';
// import ActionType from './action-type';

// function* fetchProjectComments(payload: any) {
//   yield put(Action.updateCommentState({ loading: true }));
//   const resp = yield call(commentAPI.getListComments, payload.projectId, payload.params);

//   if (payload.callback) payload.callback(resp.data);

//   if (resp?.data?.data) {
//     return yield put(
//       Action.updateCommentState({ comments: resp.data.data, pagination: resp.data.pagination, loading: false })
//     );
//   } else {
//     yield put(Action.updateCommentState({ loading: false }));
//   }
// }

// function* submitProjectComment(payload: any) {
//   yield put(Action.updateCommentState({ submitCommentLoading: true }));
//   const resp = yield call(commentAPI.submitComment, payload.projectId, payload.comment);

//   if (payload.callback) payload.callback(resp.data);

//   if (resp?.data?.commentId) {
//     return yield put(
//       Action.submitProjectCommentSucceeded({ comment: resp.data, submitCommentLoading: false })
//     );
//   } else {
//     yield put(Action.updateCommentState({ submitCommentLoading: false }));
//   }
// }

// export default function* () {
//   yield all([takeEvery(ActionType.FETCH_COMMENTS, fetchProjectComments)]);
//   yield all([takeEvery(ActionType.SUBMIT_COMMENT, submitProjectComment)]);
// }
