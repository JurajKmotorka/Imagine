import Input from "./Input";
import Output from "./Output";
import { fetchTagsAPI, fetchImagesAPI } from "../../utils/api";
import { useState } from "react";

function Home() {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null); // State to store the image URL

  const handleInputSubmit = (userInput: string) => {
    fetchTagsAPI(userInput)
      .then((tagsResponse) => {
        console.log("Tags response:", tagsResponse);
        setTags(tagsResponse);
        return fetchImagesAPI(tagsResponse);
      })
      .then((imagesResponse) => {
        console.log("Images response:", imagesResponse);
        // Assuming imagesResponse contains the URL of the image
        if (
          imagesResponse &&
          imagesResponse.urls &&
          imagesResponse.urls.regular
        ) {
          setImage(imagesResponse.urls.regular); // Set the image URL in state
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <Input onSubmit={handleInputSubmit} />
      <Output tags={tags ? tags : []} images={image ? [image] : []} />
    </div>
  );
}

export default Home;
