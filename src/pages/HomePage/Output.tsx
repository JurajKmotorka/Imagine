function Output({ tags, images }: { tags: string[]; images: string[] }) {
  console.log("Output: ", { tags, images });
  return (
    <div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <div>
            <img
              key={index}
              src={imageUrl}
              alt={`
            Image ${index + 1}
          `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Output;
