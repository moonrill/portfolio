/**
 * BlogLayout is the layout for the blog section.
 * It centers the content and provides some padding.
 * @param {React.ReactNode} children The children to render.
 * @returns {JSX.Element} The rendered BlogLayout component.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
