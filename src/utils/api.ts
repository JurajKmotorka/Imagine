export const fetchTagsAPI = async (userInput: string): Promise<string[]> => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("text", userInput);

  const url = "https://twinword-text-classification.p.rapidapi.com/classify/";
  const options: RequestInit = {
    method: "POST",
    headers: new Headers({
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": import.meta.env.VITE_X_RAPID_API_KEY,
      "X-RapidAPI-Host": "twinword-text-classification.p.rapidapi.com",
    }),
    body: encodedParams,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Assuming the response is in JSON format
    console.log(result);
    return result.keywords; // Assuming the tags are in the 'tags' property of the result
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const fetchImagesAPI = async (tags: string[]): Promise<any> => {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  console.log("first tag:", tags[0]);

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${tags[0]}&client_id=${accessKey}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    const firstImage = data.results[1];
    console.log(firstImage);
    return firstImage;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};
