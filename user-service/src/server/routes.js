import { Users } from "#root/db/models";
import generateUUID from "../helpers/generateUUID";
import generateHash from "../helpers/generateHash";

const setupRoutes = app => {
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
    console.log(users);
    return res.json(users);
  });
};

export default setupRoutes;
