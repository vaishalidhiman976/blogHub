import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fetchPosts } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchPosts();
  return (

      <>

        {/* Hero Section */}

        <section className="w-full relative bg-gray-100 pt-14 pb-5 text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">BlogHub</h2>
            <p className="text-gray-600 mb-6">
            Read the latest blog posts and explore comments. 
            {/* A Blog Challenge given By <span className="font-medium text-gray-700">"Novel Financial Solution"</span> on 27-May-2025, Tuesday. */}
            </p>
            <button className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700">
              Contact
            </button>
          </div>

          {/* Bottom triangle */}
          <div className="absolute -bottom-11 left-0 w-full h-12 overflow-hidden">
            <div
              className="w-full h-full bg-gray-100"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backgroundColor: "bg-gray-100",
              }}
            />
          </div>
        </section>


        {/* Blog Section */}

        <section className="container mx-auto py-24">
          <h1 className="text-2xl text-center pb-10">Latest Blogs</h1>
          <Carousel className="mb-12 border rounded-md p-8">
            <CarouselContent className="-ml-8">
            {posts.slice(0, 10).map((post) => (
              <CarouselItem
                key={post.id}
                className="md:basis-1/3 lg:basis-1/4 pl-8">
                <BlogCard id={post.id} title={`${post.title.slice(0, 40)}...`} body={`${post.body.slice(0, 120)}...`} />
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        <Link href="/posts" className="flex justify-center">
          <Button className="cursor-pointer">View All</Button>
        </Link>
        </section>
      </>


  );
}
