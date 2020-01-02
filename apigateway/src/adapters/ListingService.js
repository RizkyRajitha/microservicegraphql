import got from "got";

const LISTINGS_SERVICE_URI = "http://listing-service:7100";

export default class listingsService {
  static async fetchAllListings() {
    const data = await got.get(LISTINGS_SERVICE_URI + "/listall").json();
    return data;
  }
}
