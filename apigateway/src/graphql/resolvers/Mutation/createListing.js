import ListingService from "../../../adapters/ListingService";

const createListingResolver = async (obj, { title, description }, context) => {
  if (!context.res.locals.userSession) throw new Error("user not logged in");

  return await ListingService.createListing({ title, description });
};

export default createListingResolver;
