import BlogCard from "@/components/BlogCard";
import { Card, CardContent } from "@/components/ui/card";
import { fetchComments, fetchPost } from "@/lib/api";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetail(props: PageProps) {
  // Await the route params
  const { slug } = await props.params;

  const post = await fetchPost(slug);
  const comments = await fetchComments(+slug);

  return (
    <>
      <section className="w-full relative py-24 pb-5 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Fresh News</h2>
          <p className="text-gray-600 mb-6">
            Stay informed and inspired with our bite-sized articles.
          </p>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="w-full">
          <BlogCard id={post.id} title={post.title} body={post.body} />
        </div>

        <div className="mt-6">
          <h1 className="text-md text-black text-medium mb-6">Comments</h1>
          {comments.map((comment) => (
            <Card key={comment.id} className="py-4 px-4 mb-5">
              <CardContent className="grid gap-4 px-2">
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-md font-medium text-black leading-none">
                      {comment.name}
                    </p>
                    <small className="font-normal leading-none">
                      {comment.email}
                    </small>
                    <p className="text-sm text-muted-foreground mt-4">
                      {comment.body}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}