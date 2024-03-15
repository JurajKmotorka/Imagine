import Input from "./Input";
import Output from "./Output";
import {
  fetchTagsAPI,
  fetchImagesAPI,
  fetchproxyAPI,
  trimmedData,
} from "../../utils/api";
import { useState } from "react";

function Home() {
  const [images, setImages] = useState<trimmedData[]>([]);
  const [proxiedLinks, setProxiedLinks] = useState<string[] | null>([]);

  const handleInputSubmit = (userInput: string) => {
    fetchTagsAPI(userInput)
      .then((tagsResponse) => {
        console.log("Tags response:", tagsResponse);

        const promises = tagsResponse.slice(0, 3).map((tag) => {
          return fetchImagesAPI(tag);
        });

        Promise.all(promises)
          .then((returnedData) => {
            setImages(returnedData);

            console.log("Images response:", returnedData);
            const proxiedLinkPromises = returnedData.map((image) =>
              fetchproxyAPI(image)
            );

            Promise.all(proxiedLinkPromises)
              .then((proxiedLinks) => {
                console.log("Proxied links:", proxiedLinks);
                setProxiedLinks(proxiedLinks);
              })
              .catch((error) => {
                console.log("Error fetching proxied links:", error);
              });
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
    <>
      <nav>
        <img alt="logo" src="/logo.png" />{" "}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Input onSubmit={handleInputSubmit} />
      <Output
        images={images ? images : []}
        downloadLinks={proxiedLinks ? proxiedLinks : []}
      />
    </>
  );
}

export default Home;
