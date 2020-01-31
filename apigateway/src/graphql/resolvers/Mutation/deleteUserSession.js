import UserService from "#root/adapters/UserService";

const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
  await UserService.deleteUserSession({ sessionId });

  context.res.clearCookie("userSessionId");

  return true;
};

export default deleteUserSessionResolver;
