import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";

export default function Home(posts) {
  return (
    <div>
      <Head>
        <title>Abir&apos;s Blog</title>
      </Head>

      <h2>Welcome</h2>
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

  console.log(posts);
  return {
    props: {
      posts: "The Posts",
    },
  };
}
