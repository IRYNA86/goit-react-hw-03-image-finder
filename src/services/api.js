import axios from 'axios';

const apiKey = '25360661-9d832ca480fd7eb90334f4453';

axios.defaults.baseURL = 'https://pixabay.com/api';


export const apiGallery = async (nextName) => {
  
   
    const response = await axios.get(
        `/?key=${apiKey}&q=${nextName}&page=1&image_type=photo&orientation=horizontal&per_page=12`
      )
        return response.data;
}

