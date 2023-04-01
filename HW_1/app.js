import axios from "axios";
  //Global constants.
  const rawUserURL = "https://jsonplaceholder.typicode.com/users/";
  const rawPostURL = "https://jsonplaceholder.typicode.com/posts?userId=";

export default async function getData(userID) {
  //Fetch.
  let userInfo = await (await getUser(userID)).data;
  let usersPosts = await (await getPosts(userID)).data;

  //Return as one object.
  return {
    ...userInfo,
    posts: usersPosts,
  };
}
//Function to get user information.
async function getUser(_userID) {
  let res;
  
  try {
    res = axios.get(rawUserURL + _userID);
  } catch (err) {
    console.log("Couldn't fetch user info please check for errors!\n" + err);
  }

  return res;
}
//Function to get users posts.
async function getPosts(_userID) {
  let res;

  try {
    res = axios.get(rawPostURL + _userID);
  } catch (err) {
    console.log("Couldn't fetch user posts please check for errors!\n" + err);
  }

  return res;
}
