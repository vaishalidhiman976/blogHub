import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Loading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="w-full relative bg-gray-100 pt-14 pb-5 text-center px-4 animate-pulse">
        <div className="max-w-2xl mx-auto">
          <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4" />
          <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-6" />
          <div className="w-32 h-10 mx-auto bg-gray-300 rounded" />
        </div>
        <div className="absolute -bottom-11 left-0 w-full h-12 overflow-hidden">
          <div
            className="w-full h-full bg-gray-100"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            }}
          />
        </div>
      </section>

      {/* Blog Skeleton Section */}
      <section className="container mx-auto py-24">
        <h1 className="text-2xl text-center pb-10">Loading Blogs...</h1>
        <Carousel className="mb-12 border rounded-md p-8">
          <CarouselContent className="-ml-8">
            {[...Array(4)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 pl-8">
                <LoadingSkeleton />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      </>
  );
}