import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

//calls action creator and returns innerfunction and dispatches it therefore inner function
//shows up inside redux-thunk and gets called by dispatch
//to make sure not to run any logic inside action creator untill list of posts is fetched
//place 'await' keyword before calling dispatch function
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //wait for the posts
  await dispatch(fetchPosts());

  //getting an array of all userIds through memoize map utility
  //iterate over all IDs and call action creator and then dispatch
  //chain functions  by _.chain()
  //execute _.chain() by adding .value below last function call
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

//making request to jsonPlaceholder API
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

/* //a function that returns a function that calls _fetchUser(id, dispatch)
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

//memoize calls the function only once with every unique argument value
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
}); */

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
