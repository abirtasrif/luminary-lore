import Image from "next/image";
const Post = ({ post }) => {
  return (
    <div className="card">
      <Image
        src={post.frontmatter.cover_image}
        alt="cover-image"
        width={400}
        height={400}
      />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>
      <h2>Test heading 2</h2>
      <p>{post.frontmatter.excert}</p>
    </div>
  );
};

export default Post;
