import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import { fetchTagsAPI, fetchImagesAPI } from "../../utils/api";

function Home() {
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  {
    /* tag API call */
  }
  const handleInputSubmit = async (userInput: string) => {
    try {
      const tagsResponse = await fetchTagsAPI(userInput);
      setTags(tagsResponse);
    } catch (error) {
      console.log("Error fetching tags:", error);
    }
    {
      /* Unsplash API call */
    }
    try {
      const imagesResponse = await fetchImagesAPI(tags);
      setImages(imagesResponse);
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  };

  return (
    <div>
      {/* input for text */}
      {/* button for submit */}
      <Input onSubmit={handleInputSubmit} />

      {/* Images output */}
      <Output tags={tags} images={images} />
    </div>
  );
}

export default Home;
