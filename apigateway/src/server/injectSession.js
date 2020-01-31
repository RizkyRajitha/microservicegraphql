import UserSesvice from "../adapters/UserService";

const injectSession = async (req, res, next) => {
  console.log("coockie : " + req.cookies.userSessionId);

  var sessionId = req.cookies.userSessionId;

  if (req.cookies.userSessionId) {
    const userSession = await UserSesvice.getSession({ sessionId });
    res.locals.userSession = userSession;
  }

  return next();
};

export default injectSession;
