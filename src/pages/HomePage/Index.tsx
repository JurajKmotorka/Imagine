import Input from "./Input";
import Output from "./Output";
import { fetchTagsAPI, fetchImagesAPI } from "../../utils/api";
import { useState } from "react";

function Home() {
  const [tags, setTags] = useState<string[]>([]);
  let images: string[] = [];
  const handleInputSubmit = (userInput: string) => {
    fetchTagsAPI(userInput)
      .then((tagsResponse) => {
        console.log("Tags response:", tagsResponse);
        setTags(tagsResponse);
        const tagsToRender = tagsResponse.slice(0, 3);

        return (images = tagsToRender.map((tag) => {
          return fetchImagesAPI(tag);
        }));
      })

      .catch((error) => {
        console.log("Error:", error);
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
