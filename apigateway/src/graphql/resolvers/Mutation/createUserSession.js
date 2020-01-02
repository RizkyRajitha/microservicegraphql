import UserService from "#root/adapters/UserService";

const createUserSessionResolver = async (obj, { email, password }, context) => {
  const userSession = await UserService.createUserSession({ email, password });

  context.res.cookie("userSessionId", userSession.id, {
    expires: new Date(Date.now() + 3600000),
    httpOnly: true
  });

  return userSession;
};

export default createUserSessionResolver;
