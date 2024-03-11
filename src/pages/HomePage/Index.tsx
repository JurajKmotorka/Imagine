import Input from "./Input";
import Output from "./Output";
import { fetchTagsAPI, fetchImagesAPI } from "../../utils/api";
import { useState } from "react";

function Home() {
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const handleInputSubmit = (userInput: string) => {
    fetchTagsAPI(userInput)
      .then((tagsResponse) => {
        console.log("Tags response:", tagsResponse);
        setTags(tagsResponse);

        const promises = tagsResponse.slice(0, 3).map((tag) => {
          return fetchImagesAPI(tag);
        });

        Promise.all(promises)
          .then((imagesResponses) => {
            const urls = imagesResponses.map((response) => response);
            console.log("Images response:", urls);
            setImages(urls);
          })
          .catch((error) => {
            console.log("Error fetching images:", error);
          });
      })
      .catch((error) => {
        console.log("Error fetching tags:", error);
      });
  };

  return (
    <div>
      <Input onSubmit={handleInputSubmit} />
      <Output tags={tags ? tags : []} images={images ? images : []} />
    </div>
  );
}

export default Home;
