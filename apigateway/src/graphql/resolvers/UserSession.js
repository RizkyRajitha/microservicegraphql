import UsersService from "../../adapters/UserService";

const UserSession = {
  user: async userSession => {
    console.log(userSession);
    var sd = await UsersService.fetchOneUser({ userId: userSession.userId });
    console.log(sd);
    return sd;
  }
};

export default UserSession;
