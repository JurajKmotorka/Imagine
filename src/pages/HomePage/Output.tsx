function Output({ tags, images }: { tags: string[]; images: string[] }) {
  return (
    <div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`
            Image ${index + 1}
          `}
          />
        ))}
      </div>
    </div>
  );
}

export default Output;
