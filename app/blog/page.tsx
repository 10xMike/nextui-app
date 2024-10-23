import NextLink from "next/link";

interface Post {
  title: string;
  content: string;
  slug: string;
}

export default async function Blog() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <NextLink href={`/blog/${post.slug}`}>
              <span>{post.title}</span>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
