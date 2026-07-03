/**
 * Rendert ein JSON-LD-Script-Tag für strukturierte Daten (schema.org).
 * Server-Komponente; das JSON wird bereits im initialen HTML ausgeliefert,
 * sodass Suchmaschinen und KI-Systeme es zuverlässig auslesen können.
 */
type Props = { data: Record<string, unknown> | Record<string, unknown>[] };

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify erzeugt sicheres, escaptes JSON.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
