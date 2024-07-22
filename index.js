import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${API_URL}/characters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};
