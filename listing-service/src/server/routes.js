import { Listing } from "#root/db/models";

const setupRoutes = app => {
  app.get("/listall", async (req, res, next) => {
    const listings = await Listing.findAll();
    // console.log(listings);
    return res.json(listings);
  });

  app.post("/createlisting", async (req, res, next) => {
    console.log(req.body);
    if (!req.body.title || !req.body.description) {
      return next(new Error("invalid data"));
    }
    try {
      var newListing = await Listing.create({
        // id: generateUUID(),
        title: req.body.title,
        description: req.body.description
      });

      return res.json(newListing);
    } catch (e) {
      console.log(e);
    }
  });
};

export default setupRoutes;
