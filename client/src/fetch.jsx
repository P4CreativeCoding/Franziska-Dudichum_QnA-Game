// frontend.js

const fetchServerData = async () => {
  try {
    const response = await fetch("https://qna-game.onrender.com/");
    const data = await response.json();
    console.log(data); // Do something with the response data
  } catch (error) {
    console.error("Error fetching server data:", error);
  }
};

fetchServerData();
