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
    <div className="flex gap-4 flex-col md:flex-row min-h-56  justify-center border rounded-xl xl:h-92  md:h-64 lg:h-72 box-border p-4 xl:px-32 w-full text-center mt-4 ">
      {images.length > 0 ? (
        images.map((image, index) => (
          <div
            key={image.id}
            className=" border rounded-xl overflow-hidden flex flex-col "
          >
            <img
              className=" aspect-video object-cover grow"
              src={image.urls.regular}
              alt={image.alt_description}
            />
            <p className="border-t py-1 px-2">
              By{" "}
              <a
                className="text-indigo-300"
                href={`https://unsplash.com/@${image.user.username}?utm_source=Imagine&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.user.username}
              </a>{" "}
              on{" "}
              <a
                className="text-indigo-300"
                href="https://unsplash.com/?utm_source=Imagine&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>{" "}
              {downloadLinks && (
                <span className="float-right hover:opacity-70 text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-indigo-500 font-medium">
                  <a
                    href={downloadLinks[index]}
                    download={image.alt_description}
                  >
                    Download
                  </a>
                </span>
              )}
            </p>
          </div>
        ))
      ) : (
        <div className="text-3xl my-auto text-gray-300">
          Your images will go here
        </div>
      )}
    </div>
  );
};

export default Output;
