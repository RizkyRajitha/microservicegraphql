import got from "got";

const USERS_SERVICE_URI = "http://user-service:7101";

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
}
