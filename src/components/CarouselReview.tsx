import Review from "@/components/Review";

export default function CarouselReview() {
  return (
    <section className="flex flex-col items-center first-line px-5 gap-5 mb-5">
      <h1 className="uppercase font-extrabold text-4xl md:text-7xl">
        Opiniones de nuestros clientes
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
}
