import axios from "axios";
    const rawUserURL = "https://jsonplaceholder.typicode.com/users/";
    const rawPostURL = "https://jsonplaceholder.typicode.com/posts?";

export default async function getData(userID) {
    let userInfo = await (await getUser(userID)).data;
    let usersPosts = await (await getPosts(userID)).data;

    return {
        userInfo,
        usersPosts,
    };
}
async function getUser(_userID) {
  let res;

  try {
    res = axios.get(rawUserURL + _userID);
  } catch (err) {
    console.log("Couldn't fetch user info please check for errors!\n" + err);
  }

  return res;
}
async function getPosts(_userID) {
  let res;

  try {
    res = axios.post(rawPostURL, { userId: _userID });
  } catch (err) {
    console.log("Couldn't fetch user posts please check for errors!\n" + err);
  }
  
  return res;
}
