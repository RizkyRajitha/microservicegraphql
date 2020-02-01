import got from "got";
import accessEnv from "../helpers/accessEnv";
const LISTINGS_SERVICE_URI = accessEnv('LISTINGS_SERVICE_URI');

export default class listingsService {
  static async fetchAllListings() {
    const data = await got.get(LISTINGS_SERVICE_URI + "/listall").json();
    return data;
  }

  static async createListing({ title, description }) {
    const data = await got
      .post(LISTINGS_SERVICE_URI + "/createlisting", {
        json: {
          title,
          description
        }
      })
      .json();
    return data;
  }
}
