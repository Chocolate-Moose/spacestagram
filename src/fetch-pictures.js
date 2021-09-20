import axios from 'axios';

/**
 * @description fetch all admin users
 * @return {Object[]} all admin users in database
 */
export const fetchPictures = async () => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=FdkKlzz4ct2pPjPxgeqDAMbAca4sHde4DIhFEeOA";

  try {
    const { data } = await axios.get(url);
    console.log('axios data', data)
    return data;
  } catch (error) {
    console.log(error)
  }
};
