export const SearchApi = async (string) => {
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '80ae854aeemsh2f7b50c36cfec0cp1bbc6fjsn2c669fd34733',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      },
    };
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${string}`, options)
    try {
      const data = response.json();
      console.log("I am response from API",data)
      return data;
    } catch (error) {
      console.log(error);
    }
  };