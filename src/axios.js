//every single request will have the same starting URL

import axios from "axios";

//we create an instance and with axios it gives us a method called create where we can pass a based url to it.
// after this each time we want to make a request we use instance.get and then in brackets the unique endpoints. No need to repear the base url part each time.

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// if have a default import then can import it with any name any alias
// can only have one default export in a file otherwise can use individual exports
// so can store many components in one file and export each and then destructure them on import
