//limited to 12 results and english-alphabet countries
const DEFAULT_URL = "https://randomuser.me/api/?results=12&nat=au,ca,gb,nz,us";

const data = fetch(DEFAULT_URL).then((res) => res.json());

// initializes the gallery and search bar with the data set retrieved from API
data.then((data) => {
	new Gallery(data.results);
	new Search(data.results);
});
