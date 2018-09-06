let API_URL = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:3000";
} else {
  API_URL = "https://kozak-group-test.herokuapp.com";
}

export { API_URL };
