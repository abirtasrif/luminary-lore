import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Post from "@/components/Post";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Abir&apos;s Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const mdMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(mdMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
