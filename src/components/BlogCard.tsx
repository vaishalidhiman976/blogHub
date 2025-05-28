import Link from "next/link"
import { Post } from "../app/types"

const BlogCard = ({ id, title, body }: Omit<Post, 'userId'>) => {
  return (
    <Link href={`/posts/${id}`} className="rounded cursor-pointer">
                <div className="flex flex-col gap-4 grayscale hover:grayscale-0">
                  <div className="relative bg-gray-100 p-6 rounded-md">
                    {/* Bottom-left corner border with rounded edge */}
                    <span className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-cyan-700 rounded-bl-md" />

                    {/* Top-right corner border with rounded edge */}
                    <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-cyan-700 rounded-tr-md" />
                      <h1 className="text-cyan-700 text-lg font-semibold text-center">Blog {id}</h1>
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                    <div className="w-full flex gap-5 justify-between items-center">
                      <h1 className="text-cyan-700 text-md font-semibold text-start" title={title}>{title}</h1>
                      {/* <small className="text-gray-500 font-light text-end">By: UserName</small> */}
                    </div>
                    <p className="text-sm text-gray-600">{body}</p> 
                  </div>
                </div>
              </Link>
  )
}

export default BlogCard
