import {
  THG_QUOTE_TABLE_ROWS,
  formatRegulatoryTableValue,
  type ThgQuoteTableRow,
} from "@/lib/thg-quote-regulatory-table";

type TableColumn = {
  key: keyof Omit<ThgQuoteTableRow, "year">;
  label: string;
  suffix: "%" | "×";
};

type Props = {
  caption?: string;
  note?: string;
  rows?: readonly ThgQuoteTableRow[];
  columns: readonly TableColumn[];
  yearLabel: string;
  numberLocale?: string;
};

export function RegulatoryOverviewTable({
  caption,
  note,
  rows = THG_QUOTE_TABLE_ROWS,
  columns,
  yearLabel,
  numberLocale = "de-DE",
}: Props) {
  return (
    <div className="regulatory-table">
      {caption ? <p className="regulatory-table__caption">{caption}</p> : null}
      <div className="regulatory-table__scroll" tabIndex={0} role="region" aria-label={caption}>
        <table className="regulatory-table__table">
          <thead>
            <tr>
              <th scope="col">{yearLabel}</th>
              {columns.map((col) => (
                <th key={col.key} scope="col">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.year}>
                <th scope="row">{row.year}</th>
                {columns.map((col) => (
                  <td key={col.key}>
                    {formatRegulatoryTableValue(row[col.key], col.suffix, numberLocale)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="regulatory-table__note">{note}</p> : null}
    </div>
  );
}
