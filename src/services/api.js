
const apiKey = '25360661-9d832ca480fd7eb90334f4453';



const apiGallery = (nextName) => {
    // const apiKey = '25360661-9d832ca480fd7eb90334f4453';
     return fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=4`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Do not have a picture with name ${nextName}`)
          );
        })
}

 export default apiGallery
