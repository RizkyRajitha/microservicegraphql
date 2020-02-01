import got from "got";
import accessEnv from "../helpers/accessEnv";
const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export default class usersService {
  static async fetchAllusers() {
    const data = await got.get(USERS_SERVICE_URI + "/listall").json();
    return data;
  }

  static async createUser({ email, password, name }) {
    const data = await got
      .post(USERS_SERVICE_URI + "/newuser", {
        json: {
          email,
          password,
          name
        }
      })
      .json();
    return data;
  }

  static async fetchOneUser({ userId }) {
    console.log("fetch one service" + userId);

    const data = await got
      .get(USERS_SERVICE_URI + "/getoneuser/" + userId)
      .json();

    console.log(data);
    return data;
  }

  static async createUserSession({ email, password }) {
    const data = await got
      .post(USERS_SERVICE_URI + "/session", {
        json: {
          email,
          password
        }
      })
      .json();
    return data;
  }

  static async getSession({ sessionId }) {
    console.log("get session " + sessionId);

    const data = await got
      .get(USERS_SERVICE_URI + "/getsession/" + sessionId)
      .json();

    console.log(data);

    return data;
  }

  static async deleteUserSession({ sessionId }) {
    console.log("delete session " + sessionId);

    const data = await got
      .delete(USERS_SERVICE_URI + "/deletesession/" + sessionId)
      .json();

    console.log(data);

    return data;
  }
}
