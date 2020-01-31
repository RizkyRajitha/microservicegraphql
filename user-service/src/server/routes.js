import { Users, UserSession } from "#root/db/models";
import { addHours } from "date-fns";
import generateUUID from "../helpers/generateUUID";
import generateHash from "../helpers/generateHash";
import compareHash from "../helpers/passwordCompare";

const USER_SESSION_TIMEOUT = 1;

const setupRoutes = app => {
  app.post("/session", async (req, res, next) => {
    console.log(req.body);
    if (!req.body.email || !req.body.password) {
      return next(new Error("invalid data"));
    }

    const user = await Users.findOne({
      attributes: {},
      where: { email: req.body.email }
    });

    // console.log(user);

    if (!user) {
      return next(new Error("User not found"));
    }

    if (!compareHash(req.body.password, user.passwordHash)) {
      return next(new Error("invalid password"));
    }

    const expirestime = addHours(new Date(), USER_SESSION_TIMEOUT);
    console.log(expirestime);

    var sessionToken = generateUUID();

    var newUserSession = await UserSession.create({
      expriesAt: expirestime,
      id: sessionToken,
      userId: user.id
    });

    return res.json(newUserSession);
  });

  app.post("/newuser", async (req, res, next) => {
    console.log(req.body);
    if (!req.body.email || !req.body.password || !req.body.name) {
      return next(new Error("invalid data"));
    }
    try {
      var newUser = await Users.create({
        id: generateUUID(),
        name: req.body.name,
        email: req.body.email,
        passwordHash: generateHash(req.body.password)
      });

      return res.json(newUser);
    } catch (e) {
      console.log(e);
    }
  });

  app.get("/listall", async (req, res, next) => {
    const users = await Users.findAll();
    // console.log(users);
    return res.json(users);
  });

  app.get("/getoneuser/:id", async (req, res, next) => {
    try {
      const users = await Users.findByPk(req.params.id);

      if (users) {
        console.log("get one user");
        console.log(users);
        return res.json(users);
      } else {
        return next(new Error("invalid UID"));
      }
    } catch (error) {
      return next(error);
    }
  });

  app.get("/getsession/:sessionid", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionid);

      if (userSession) {
        console.log("get sessionn");
        // console.log(userSession);
        return res.json(userSession);
      } else {
        return next(new Error("invalid session id"));
      }
    } catch (error) {
      console.log("error session id ");

      return next(error);
    }
  });

  app.delete("/deletesession/:sessionid", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionid);

      if (userSession) {
        console.log("get sessionn");
        // console.log(userSession);
        await userSession.destroy()

        return res.end()
      } else {
        return next(new Error("invalid session id"));
      }
    } catch (error) {
      console.log("error session id ");

      return next(error);
    }
  });







};

export default setupRoutes;
