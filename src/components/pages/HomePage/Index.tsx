import Input from "./Input";
import Output from "./Output";
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
            const proxiedLinkPromises = returnedData.map((image) => {
              if (image) {
                return fetchproxyAPI(image);
              } else {
                return Promise.resolve("");
              }
            });

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
    <div className=" max-w-[2000px] h-full  mx-auto  flex flex-col p-2 border-transparent bg-gradient-to-br from-red-500 to-indigo-600 sm:rounded-3xl ">
      <nav className="flex justify-between p-4">
        <div className="flex items-center gap-2 ">
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
      <div className=" from-indigo-800 grow  py-2 md:py-16   bg-gradient-to-b via-indigo-900  to-indigo-950 rounded-2xl sm:rounded-t-none via-15% to-50%">
        <div className=" flex h-full flex-col max-w-screen-2xl justify-center  mx-auto  px-8 ">
          <div className="flex flex-col-reverse  md:flex-row  justify-between ">
            <Input onSubmit={handleInputSubmit} />
            <AstronautAnimation />
          </div>

          <Output images={images} downloadLinks={proxiedLinks} />
        </div>
      </div>
    </div>
  );
}

export default Home;
