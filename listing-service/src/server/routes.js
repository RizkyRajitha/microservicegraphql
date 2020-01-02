import { Listing } from "#root/db/models";

const setupRoutes = app => {
  app.get("/listall", async (req, res, next) => {
    const listings = await Listing.findAll();
    // console.log(listings);
    return res.json(listings);
  });
};

export default setupRoutes;
