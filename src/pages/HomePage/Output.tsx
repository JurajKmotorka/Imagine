import { useState } from "react";
import { trimmedData } from "../../utils/api";

const Output = ({
  tags,
  images,
}: {
  tags: string[];
  images: trimmedData[];
}) => {
  const [proxiedLink, setProxiedLink] = useState<string | null>(null);

  const downloadImage = async (image: trimmedData) => {
    const proxyUrl = "https://api.codetabs.com/v1/proxy";
    const imgUrl = `${proxyUrl}?quest=${encodeURIComponent(image.urls.full)}`;
    try {
      const response = await fetch(imgUrl);
      if (!response.ok) {
        throw new Error("Failed to download image.");
      }
      const blob = await response.blob();
      const imageURL = window.URL.createObjectURL(blob);
      setProxiedLink(imageURL);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      {/* Your rendering logic here */}
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.urls.small} alt={image.alt_description} />
          <p>
            Photo by{" "}
            <a
              href={`https://unsplash.com/@${image.user.username}?utm_source=Imagine&utm_medium=referral`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image.user.username}
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/?utm_source=Imagine&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>{" "}
            | <button onClick={() => downloadImage(image)}>Download</button>
          </p>
        </div>
      ))}
      <a href={proxiedLink} download="image.jpg">
        Download proxied image
      </a>
      )
    </>
  );
};

export default Output;
