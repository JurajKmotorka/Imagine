import Input from "./Input";
import Output from "./Output";
import Card from "../../elements/Card";
import {
  fetchTagsAPI,
  fetchImagesAPI,
  fetchproxyAPI,
  trimmedData,
} from "../../../utils/api";
import { useState } from "react";
import AstronautAnimation from "../../elements/AstronautAnimation/index";

function Home() {
  const [images, setImages] = useState<trimmedData[]>([]);
  const [proxiedLinks, setProxiedLinks] = useState<string[] | null>([]);

  const handleInputSubmit = (userInput: string) => {
    fetchTagsAPI(userInput)
      .then((tagsResponse: string[]) => {
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
    <div className=" sm:mx-8 sm:my-6 p-2 border-transparent bg-gradient-to-br from-red-500 to-indigo-600 sm:rounded-3xl ">
      <nav className="flex justify-between p-4 border-b-[0px]">
        <div className="flex items-center gap-2">
          <img alt="logo" src="/spacebook-white.png" className="w-8 " />
          Imagine
        </div>
        <ul className="flex gap-4">
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
      <div className="  w-full  h-full  bg-gradient-to-b from-indigo-800  py-6 px-8 via-indigo-900 to-indigo-950 rounded-2xl sm:rounded-t-none via-15% to-50%">
        <div className="flex flex-col-reverse  sm:flex-row  justify-between ">
          <Card>
            <Input onSubmit={handleInputSubmit} />
          </Card>
          <AstronautAnimation />
        </div>
        <Output
          images={images ? images : []}
          downloadLinks={proxiedLinks ? proxiedLinks : []}
        />

        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          nobis tempore aperiam ipsum harum porro, deserunt ut soluta suscipit
          assumenda cumque recusandae veniam esse commodi, at, autem quidem?
          Necessitatibus, debitis.
        </div>
      </div>
    </div>
  );
}

export default Home;
