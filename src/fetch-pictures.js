import axios from 'axios';

/**
 * @description fetch all picture data from NASA API
 * @return an array of 10 objects with images and information about them
 */
export const fetchPictures = async () => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=FdkKlzz4ct2pPjPxgeqDAMbAca4sHde4DIhFEeOA";

  try {
    const { data } = await axios.get(url, { params: { count: 10 } });
    console.log('axios data', data)
    return data;
  } catch (error) {
    console.log(error)
  }
};
