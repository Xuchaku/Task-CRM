import { TOKEN } from "../constants";
import Place from "./../types/Place/Place";

class API {
  constructor() {}
  async getAddress(url: string, query: string) {
    let options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + TOKEN,
      },
      body: JSON.stringify({ query: query, count: 20 }),
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      const addresses: Place[] = json.suggestions.map(
        (address: any, index: number) => {
          return { ...address, id: index };
        }
      );
      return addresses;
    } else {
      return new Error("Server no available...");
    }
  }
}
export const api = new API();
