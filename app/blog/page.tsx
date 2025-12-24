import { title } from "@/components/primitives";

/**
 * BlogPage is the main page for the blog.
 * It displays a heading with the text "Blog".
 * @returns {JSX.Element} The rendered BlogPage component.
 */
export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
    </div>
  );
}
