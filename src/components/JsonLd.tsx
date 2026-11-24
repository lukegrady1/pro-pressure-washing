// Renders a JSON-LD <script>. Server component — no client JS.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Our own static content; `<` is escaped (per the Next.js JSON-LD guide)
      // so text such as review bodies can never close the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
