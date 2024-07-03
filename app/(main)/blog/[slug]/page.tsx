import { notFound } from "next/navigation";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const post = await res.json();
  if (!post) {
    notFound();
  }
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const mostImportantPostsIds = posts
    .map((post: IPost) => ({
      slug: post.id.toString(),
    }))
    .slice(0, 10);
  return mostImportantPostsIds;
}

// export const dynamicParams = true;
