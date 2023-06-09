// Assuming this code is part of your frontend JavaScript file

const fetchServerData = async () => {
  try {
    const response = await fetch("http://localhost:3001");
    const data = await response.json();
    console.log(data); // Do something with the response data
  } catch (error) {
    console.error("Error fetching server data:", error);
  }
};

fetchServerData();
