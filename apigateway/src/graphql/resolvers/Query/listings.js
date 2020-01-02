import ListingsService from "#root/adapters/ListingService";

const listingsResolver = async () => {
  return ListingsService.fetchAllListings();
};

export default listingsResolver;
