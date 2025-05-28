import BlogCard from "@/components/BlogCard"
import { fetchPosts } from "@/lib/api";

export default async function page() {
  const posts = await fetchPosts();

  
  return (
    <>
    {/* Hero Section */}

    <section className="w-full relative py-24 pb-5 text-center px-4">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Our Fresh News</h2>
      <p className="text-gray-600 mb-6">
      Stay informed and inspired with our bite-sized articles.
      {/* A Blog Challenge given By <span className="font-medium text-gray-700">"Novel Financial Solution"</span> on 27-May-2025, Tuesday. */}
      </p>
    </div>
  </section>


  {/* Blog Section */}
    <section className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={`${post.title.slice(0, 40)}...`}
            body={`${post.body.slice(0, 120)}...`}
          />
        ))}
      </div>
    </section>
    </>
  )
}


