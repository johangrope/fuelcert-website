import { INITIAL_CONSULTATION_BOOKING_URL } from "./booking";

export const DATENSCHUTZ_SEO = {
  title: "Datenschutz | FuelCert",
  metaDescription:
    "Datenschutzerklärung der FuelCert Sailer & Grope GbR – Informationen zum Umgang mit personenbezogenen Daten auf dieser Website.",
  h1: "Datenschutz",
} as const;

export const DATENSCHUTZ_UPDATED = "Diese Datenschutzerklärung wurde zuletzt am 13.06.2026 aktualisiert.";

export type DatenschutzLink = {
  label: string;
  href: string;
};

export type DatenschutzSubsection = {
  heading?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  links?: readonly DatenschutzLink[];
};

export type DatenschutzSection = {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  links?: readonly DatenschutzLink[];
  subsections?: readonly DatenschutzSubsection[];
};

export const DATENSCHUTZ_SECTIONS: readonly DatenschutzSection[] = [
  {
    heading:
      "1) Information über die Erhebung personenbezogener Daten und Kontaktdaten des Verantwortlichen",
    subsections: [
      {
        paragraphs: [
          "1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.",
        ],
      },
      {
        paragraphs: [
          "1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist FuelCert Sailer & Grope GbR, Bismarckstraße 65, 10627 Berlin, Deutschland, Tel.: +49 (0)15233560411. Sie können sich unter k.sailer@fuelcert.com an unseren Datenschutzbeauftragten wenden. Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.",
        ],
      },
      {
        paragraphs: [
          "1.3 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Terminvereinbarungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile erkennen.",
        ],
      },
    ],
  },
  {
    heading: "2) Datenerfassung beim Besuch unserer Website",
    paragraphs: [
      "Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:",
    ],
    bullets: [
      "Unsere besuchte Website",
      "Datum und Uhrzeit zum Zeitpunkt des Zugriffes",
      "Menge der gesendeten Daten in Byte",
      "Quelle/Verweis, von welchem Sie auf die Seite gelangten",
      "Verwendeter Browser",
      "Verwendetes Betriebssystem",
      "Verwendete IP-Adresse (ggf.: in anonymisierter Form)",
    ],
    subsections: [
      {
        paragraphs: [
          "Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.",
        ],
      },
    ],
  },
  {
    heading: "3) Cookies",
    paragraphs: [
      "Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Einige der von uns verwendeten Cookies werden nach dem Ende der Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endgerät und ermöglichen, Ihren Browser beim nächsten Besuch wiederzuerkennen (sog. persistente Cookies). Werden Cookies gesetzt, erheben und verarbeiten diese im individuellen Umfang bestimmte Nutzerinformationen wie Browser- und Standortdaten sowie IP-Adresswerte. Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden kann. Die Dauer der jeweiligen Cookie-Speicherung können Sie der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.",
      "Teilweise dienen die Cookies dazu, durch Speicherung von Einstellungen den Bestellprozess zu vereinfachen (z.B. Merken des Inhalts eines virtuellen Warenkorbs für einen späteren Besuch auf der Website). Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.",
      "Bitte beachten Sie, dass Sie Ihren Browser so einstellen können, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können. Jeder Browser unterscheidet sich in der Art, wie er die Cookie-Einstellungen verwaltet. Diese ist in dem Hilfemenü jedes Browsers beschrieben, welches Ihnen erläutert, wie Sie Ihre Cookie-Einstellungen ändern können. Diese finden Sie für die jeweiligen Browser unter den folgenden Links:",
    ],
    links: [
      {
        label: "Internet Explorer",
        href: "https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies",
      },
      {
        label: "Firefox",
        href: "https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen",
      },
      {
        label: "Chrome",
        href: "https://support.google.com/chrome/answer/95647?hl=de&hlrm=en",
      },
      {
        label: "Safari",
        href: "https://support.apple.com/de-de/guide/safari/sfri11471/mac",
      },
      {
        label: "Opera",
        href: "https://help.opera.com/de/latest/web-preferences/#cookies",
      },
    ],
    subsections: [
      {
        paragraphs: [
          "Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.",
        ],
      },
    ],
  },
  {
    heading: "4) Kontaktaufnahme",
    paragraphs: [
      "Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle eines Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck einer Terminbuchung, der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet. Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    ],
  },
  {
    heading: "5) Formular zur Terminbuchung",
    subsections: [
      {
        heading: "5.1 Allgemeine Informationen zum Verfahren und der Funktionsweise",
        paragraphs: [
          `Wenn Sie uns per Email oder über die Online-Terminbuchung (unter ${INITIAL_CONSULTATION_BOOKING_URL}) kontaktieren, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten gespeichert, um Ihre Anfrage zu bearbeiten und mögliche Anschlussfragen zu klären.`,
        ],
      },
      {
        heading: "5.2 Verarbeitung personenbezogener Daten",
        paragraphs: [
          "Im Rahmen der Durchführung der Terminbuchung werden folgende personenbezogene Daten verarbeitet:",
        ],
        bullets: [
          "Vorname(n) und Nachname",
          "E-Mail-Adresse",
          "Log-Files (Datum, Uhrzeit, Browser, Betriebssystem, IP-Adresse, Referrer-URL)",
        ],
      },
      {
        paragraphs: [
          "Die Verarbeitung der personenbezogenen Daten erfolgt, um den Besuchenden der Webseite eine Einladung für ein digitales Meeting zuzusenden.",
          "Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten ist Art. 6 Abs. 1 S. 1 lit. b DSGVO, da die Verarbeitung zur Erfüllung des mit Ihnen geschlossenen Vertrags erforderlich ist.",
          "Die Verarbeitung der Logfiles dient ebenfalls der Betrugsverhinderung und –prävention, Fehleridentifikation sowie der Verhinderung von Spam-Angriffen. Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Die genannten Interessen von FuelCert Sailer & Grope GbR sind als berechtigt im Sinne der Vorschrift anzusehen.",
          "Die Daten werden von FuelCert Sailer & Grope GbR unter Beachtung der einschlägigen gesetzlichen Aufbewahrungsfristen gespeichert (i.d.R. drei Jahre) und anschließend gelöscht, ohne dass es hierfür einer gesonderten Aufforderung zur Löschung bedarf.",
        ],
      },
      {
        heading: "Terminbuchung über Microsoft Bookings",
        paragraphs: [
          "Zur Vereinfachung der Terminbuchung für Erstgespräche nutzen wir den Online-Buchungsdienst „Microsoft Bookings“, einen Bestandteil von Microsoft 365. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, D18 P521, Irland (im Folgenden „Microsoft“).",
          "Bei der Buchung eines Termins über Microsoft Bookings werden personenbezogene Daten wie Name, E-Mail-Adresse, ggf. Telefonnummer sowie Termininformationen erhoben und verarbeitet. Die Datenverarbeitung erfolgt zur Bearbeitung der Terminbuchung, zur Terminbestätigung sowie zur Vorbereitung und Durchführung des Erstgesprächs (z. B. Versand einer Kalendereinladung per Microsoft Teams).",
          "Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Microsoft handelt in diesem Zusammenhang als Auftragsverarbeiter; es besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO auf Grundlage der von Microsoft bereitgestellten Standardvertragsklauseln bzw. des Microsoft-Produkte-und-Dienste-Datenschutz-Addendums (DPA).",
          "Im Rahmen der Nutzung von Microsoft Bookings kann es auch zu einer Übermittlung personenbezogener Daten an Server der Microsoft Corporation in den USA kommen. Microsoft stellt hierfür geeignete Garantien im Sinne von Art. 46 DSGVO bereit.",
        ],
        links: [
          {
            label: "Datenschutzerklärung von Microsoft",
            href: "https://privacy.microsoft.com/de-de/privacystatement",
          },
          {
            label: "Microsoft-Datenschutz-Addendum (DPA)",
            href: "https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA",
          },
        ],
      },
    ],
  },
  {
    heading: "6) Kunden-Datenraum / Nextcloud",
    paragraphs: [
      "Für den sicheren Austausch von Projektunterlagen, Nachweisen, Bilanzierungsdateien, Ergebnisdateien und sonstigen auftragsbezogenen Dokumenten stellen wir unseren Kunden einen geschützten Datenraum auf Basis von Nextcloud bereit. Der Datenraum ist unter https://cloud.fuelcert.com erreichbar.",
      "Der Betrieb erfolgt durch die hosting.de GmbH, Franzstraße 51, 52064 Aachen, Deutschland, als Auftragsverarbeiter. Mit hosting.de besteht eine Vereinbarung zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Die Verarbeitung erfolgt nach Maßgabe dieser Vereinbarung grundsätzlich innerhalb der EU bzw. des EWR.",
      "Im Kunden-Datenraum können insbesondere Kontaktdaten, Projekt- und Vertragsdaten, technische Unterlagen, Zertifizierungs- und Nachweisdokumente, Bilanzierungs- und Berechnungsdateien sowie Ergebnisdateien verarbeitet werden. Die Nutzung erfolgt projektbezogen über geschützte Upload- bzw. Download-Links oder über persönliche Benutzerzugänge. Freigaben können mit Passwortschutz, Ablaufdatum und beschränkten Berechtigungen versehen werden.",
      "Die Verarbeitung erfolgt zur Durchführung unserer Leistungen und zur sicheren Organisation der Projektbearbeitung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. Soweit die Verarbeitung der sicheren, nachvollziehbaren und effizienten Projektorganisation dient, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
      "Die im Kunden-Datenraum gespeicherten Daten werden gelöscht, sobald sie für die jeweilige Projektbearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Dokumentationsinteressen entgegenstehen.",
    ],
  },
  {
    heading: "7) FontAwesome",
    paragraphs: [
      "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts von „FontAwesome“, einem Dienst der Fonticons, Inc., 710 Blackhorn Dr, Carl Junction, 64834, MO, USA („FontAwesome“). Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen.",
      "Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von FontAwesome aufnehmen. Hierbei kann es auch zu einer Übermittlung von personenbezogenen Daten an die Server von FontAwesome in den USA kommen. Auf diese Weise erlangt FontAwesome Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von FontAwesome Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.",
    ],
    links: [
      {
        label: "Weitere Informationen zu FontAwesome",
        href: "https://fontawesome.com/privacy",
      },
    ],
  },
  {
    heading: "8) Google Web Fonts",
    paragraphs: [
      "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland („Google“) bereitgestellt werden. Mithilfe von Google Web Fonts können wir externe Schriftarten auf unserer Website laden und darstellen. Google Web Fonts ist auf unserer Seite lokal eingebunden. Dies bedeutet, dass die Schriftarten nicht von Google-Servern geladen werden.",
      "Im Rahmen der Verarbeitung über Google Web Fonts werden folgende personenbezogene Daten erhoben und verarbeitet:",
    ],
    bullets: ["IP-Adresse"],
    subsections: [
      {
        paragraphs: [
          "Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Durch das lokale Hosting ist sichergestellt, dass keine Daten an Google übermittelt werden, ein entsprechender Datentransfer findet nicht statt.",
        ],
      },
    ],
    links: [
      {
        label: "Google Web Fonts FAQ",
        href: "https://developers.google.com/fonts/faq",
      },
      {
        label: "Datenschutzerklärung von Google",
        href: "https://www.google.com/policies/privacy/",
      },
    ],
  },
  {
    heading: "9) Google Kundenrezensionen",
    paragraphs: [
      "(ehemals Google Zertifizierter-Händler-Programm)",
      "Wir arbeiten mit Google im Rahmen des Programms „Google Kundenrezensionen“ zusammen. Der Anbieter ist Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland („Google“). Dieses Programm gibt uns die Möglichkeit, Kundenrezensionen von Nutzern unserer Website einzuholen. Hierbei werden Sie nach einem Einkauf auf unserer Website gefragt, ob Sie an einer E-Mail-Umfrage von Google teilnehmen möchten. Wenn Sie Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO erteilen, übermitteln wir Ihre E-Mail-Adresse an Google. Sie erhalten eine E-Mail von Google Kundenrezensionen, in der Sie gebeten werden, die Kauferfahrung auf unserer Website zu bewerten. Die von Ihnen abgegebene Bewertung wird anschließend mit unseren anderen Bewertungen zusammengefasst und in unserem Logo Google Kundenrezensionen sowie in unserem Merchant Center-Dashboard angezeigt. Außerdem wird Ihre Bewertung für Google Verkäuferbewertungen genutzt. Im Rahmen der Nutzung von Google Kundenrezensionen kann es auch zu einer Übermittlung von personenbezogenen Daten an die Server der Google LLC. in den USA kommen.",
      "Sie können Ihre Einwilligung jederzeit durch eine Nachricht an den für die Datenverarbeitung Verantwortlichen oder gegenüber Google widerrufen.",
    ],
    links: [
      {
        label: "Datenschutz – Google Kundenrezensionen",
        href: "https://support.google.com/merchants/answer/7188525?hl=de",
      },
      {
        label: "Datenschutz – Google Verkäuferbewertungen",
        href: "https://support.google.com/google-ads/answer/2375474",
      },
    ],
  },
  {
    heading: "10) Rechte des Betroffenen",
    subsections: [
      {
        heading: "10.1",
        paragraphs: [
          "Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts- und Interventionsrechte), über die wir Sie nachstehend informieren:",
        ],
        bullets: [
          "Auskunftsrecht gemäß Art. 15 DSGVO: Sie haben insbesondere ein Recht auf Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke, die Kategorien der verarbeiteten personenbezogenen Daten, die Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw. die Kriterien für die Festlegung der Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer Aufsichtsbehörde, die Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik und die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei Weiterleitung Ihrer Daten in Drittländer bestehen;",
          "Recht auf Berichtigung gemäß Art. 16 DSGVO: Sie haben ein Recht auf unverzügliche Berichtigung Sie betreffender unrichtiger Daten und/oder Vervollständigung Ihrer bei uns gespeicherten unvollständigen Daten;",
          "Recht auf Löschung gemäß Art. 17 DSGVO: Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten bei Vorliegen der Voraussetzungen des Art. 17 Abs. 1 DSGVO zu verlangen. Dieses Recht besteht jedoch insbesondere dann nicht, wenn die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;",
          "Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO: Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, solange die von Ihnen bestrittene Richtigkeit Ihrer Daten überprüft wird, wenn Sie eine Löschung Ihrer Daten wegen unzulässiger Datenverarbeitung ablehnen und stattdessen die Einschränkung der Verarbeitung Ihrer Daten verlangen, wenn Sie Ihre Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, nachdem wir diese Daten nach Zweckerreichung nicht mehr benötigen oder wenn Sie Widerspruch aus Gründen Ihrer besonderen Situation eingelegt haben, solange noch nicht feststeht, ob unsere berechtigten Gründe überwiegen;",
          "Recht auf Unterrichtung gemäß Art. 19 DSGVO: Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden. Ihnen steht das Recht zu, über diese Empfänger unterrichtet zu werden.",
          "Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO: Sie haben das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen, soweit dies technisch machbar ist;",
          "Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO: Sie haben das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft zu widerrufen. Im Falle des Widerrufs werden wir die betroffenen Daten unverzüglich löschen",
        ],
      },
      {
        heading: "10.2 Widerspruchsrecht",
        paragraphs: [
          "Wenn wir im Rahmen einer Interessenabwägung Ihre personenbezogenen Daten aufgrund unseres überwiegenden berechtigten Interesses verarbeiten, haben Sie das jederzeitige Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen diese Verarbeitung Widerspruch mit Wirkung für die Zukunft einzulegen.",
          "Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten. Eine Weiterverarbeitung bleibt aber vorbehalten, wenn wir zwingende schutzwürdige Gründe für die Verarbeitung nachweisen können, die Ihre Interessen, Grundrechte und Grundfreiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.",
          "Werden Ihre personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Sie können den Widerspruch wie oben beschrieben ausüben.",
          "Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten zu Direktwerbezwecken.",
        ],
      },
    ],
  },
  {
    heading: "11) Dauer der Speicherung personenbezogener Daten",
    paragraphs: [
      "Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).",
      "Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden diese Daten so lange gespeichert, bis der Betroffene seine Einwilligung widerruft.",
      "Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.",
      "Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis der Betroffene sein Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausübt, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
      "Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis der Betroffene sein Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausübt.",
      "Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.",
    ],
  },
];

export const DATENSCHUTZ_CONTACT = {
  phone: "+49 (0)15233560411",
  phoneHref: "tel:+4915233560411",
  dpoEmail: "k.sailer@fuelcert.com",
  bookingUrl: INITIAL_CONSULTATION_BOOKING_URL,
} as const;
