import { trimmedData } from "../../../utils/api";

const Output = ({
  images,
  downloadLinks,
}: {
  images: trimmedData[];
  downloadLinks: string[] | null;
}) => {
  console.log("downloadLinks:", downloadLinks);

  return (
    <>
      {/* Your rendering logic here */}
      {images.map((image, index) => (
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
            {downloadLinks && (
              <a href={downloadLinks[index]} download={image.alt_description}>
                Download
              </a>
            )}
          </p>
        </div>
      ))}
    </>
  );
};

export default Output;
