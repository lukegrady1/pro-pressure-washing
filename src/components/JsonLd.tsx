// Renders a JSON-LD <script>. Server component — no client JS.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Data is our own trusted, static content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
