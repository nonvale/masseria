interface GalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  title?: string;
}

export function Gallery({ images, title }: GalleryProps) {
  return (
    <div className="mb-16">
      {title && (
        <h2 className="text-3xl font-serif font-bold text-center mb-8">{title}</h2>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-xl luxury-shadow hover:scale-105 transition-transform cursor-pointer"
            data-testid={`gallery-image-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
