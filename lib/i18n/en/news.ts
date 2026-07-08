import nehsAuktionImage from "@/assets/news-nehs-auktion-2026.png";
import webinarRfnboImage from "@/assets/news-webinar-rfnbo-2026.png";
import rfnboLaenderschreibenImage from "@/assets/news-rfnbo-laenderschreiben-2026.png";
import h2SchienenverkehrImage from "@/assets/news-h2-schienenverkehr-2026.png";
import nehsPreiskorridor2027Image from "@/assets/news-nehs-preiskorridor-2027.png";
import type { NewsPost } from "@/lib/news";

export type { NewsPost, NewsBlock, NewsInfobox } from "@/lib/news";
export { newsPath } from "@/lib/news";

export const NEWS_SEO = {
  title: "News | FuelCert",
  metaDescription:
    "Current insights and developments on the GHG quota, emissions trading, certification and the regulatory framework.",
  kicker: "News",
  h1: "News",
  intro:
    "Current insights and developments on the GHG quota, emissions trading, certification and the regulatory framework.",
  readMore: "Read more",
  backToOverview: "Back to the news overview",
} as const;

export const NEWS_POSTS: readonly NewsPost[] = [
  {
    slug: "rfnbo-wasserstoff-schienenverkehr-thg-quote",
    title: "Clarity established: RFNBO hydrogen in rail transport is eligible for the GHG quota",
    date: "2026-06-20",
    dateLabel: "20 June 2026",
    teaser:
      "FuelCert has established clarity with the main customs office that RFNBO hydrogen in rail transport is eligible for the GHG quota – an important step for hydrogen projects in the transport sector.",
    metaTitle:
      "RFNBO hydrogen in rail transport: eligible for the GHG quota | FuelCert",
    metaDescription:
      "FuelCert has set out to the main customs office that the greenhouse gas reduction from RFNBO hydrogen in rail transport is eligible for the GHG quota. Legal basis, practical relevance and notes.",
    intro:
      "FuelCert has established clarity with the main customs office (Hauptzollamt) that the greenhouse gas reduction from using RFNBO hydrogen in rail transport is eligible for the GHG quota. This reassesses a previously apparently more restrictive view held by the authority.",
    image: h2SchienenverkehrImage,
    imageAlt:
      "Infographic: hydrogen train in rail transport with icons for RFNBO hydrogen, rail transport and eligibility for the GHG quota",
    imageCaption:
      "FuelCert has set out to the main customs office how RFNBO hydrogen in rail transport is treated for eligibility under the GHG quota.",
    paragraphs: [
      "FuelCert has established clarity with the main customs office (Hauptzollamt) that the greenhouse gas reduction from using RFNBO hydrogen in rail transport is eligible for the GHG quota. This reassesses a previously apparently more restrictive view held by the authority.",
      "The assessment is based on several regulatory texts. Particularly relevant are Section 3(3) of the 37th BImSchV, Section 37a(5) no. 4 BImSchG and the relevant FAQ answer from the Federal Ministry for the Environment on the draft of the second act to further develop the GHG quota.",
      "The clarification is of high practical importance for projects in the field of hydrogen and rail transport. It improves the regulatory classification of RFNBO hydrogen as a compliance option within the GHG quota and thereby strengthens the economic outlook for such applications.",
      "At the same time, it should be noted that the main customs office's information is not legally binding. A conclusive, binding clarification can only be achieved within the framework of a formal procedure.",
      "Nevertheless, the clarification is an important step for the ramp-up of hydrogen in the transport sector and, in particular, for greater climate protection in rail transport.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "FuelCert has established clarity with the main customs office (Hauptzollamt) that the greenhouse gas reduction from using RFNBO hydrogen in rail transport is eligible for the GHG quota. This reassesses a previously apparently more restrictive view held by the authority.",
      },
      { type: "heading", text: "Regulatory basis" },
      {
        type: "paragraph",
        text: "The assessment is based on several regulatory texts. Particularly relevant are:",
      },
      {
        type: "list",
        items: [
          "Section 3(3) of the 37th BImSchV, according to which the adjustment factor for drivetrain efficiency also applies where the renewable fuel of non-biological origin is demonstrably used in road or rail vehicles",
          "Section 37a(5) no. 4 BImSchG, in which the limitation to road transport is formulated only for the “electricity” compliance option",
          "the relevant FAQ answer from the Federal Ministry for the Environment on the draft of the second act to further develop the GHG quota",
        ],
      },
      { type: "heading", text: "Practical relevance" },
      {
        type: "paragraph",
        text: "The clarification is of high practical importance for projects in the field of hydrogen and rail transport. It improves the regulatory classification of RFNBO hydrogen as a compliance option within the GHG quota and thereby strengthens the economic outlook for such applications.",
      },
      { type: "heading", text: "Assessment and note of caution" },
      {
        type: "paragraph",
        text: "At the same time, it should be noted that the main customs office's information is not legally binding. A conclusive, binding clarification can only be achieved within the framework of a formal procedure.",
      },
      {
        type: "paragraph",
        text: "Nevertheless, the clarification is an important step for the ramp-up of hydrogen in the transport sector and, in particular, for greater climate protection in rail transport.",
      },
    ],
  },
  {
    slug: "erste-nehs-auktion-2026",
    title: "First nEHS auction 2026: clearing price at the upper end of the price corridor",
    date: "2026-07-02",
    dateLabel: "2 July 2026",
    teaser:
      "The first nEHS auction 2026 marks the transition from a fixed price to a price corridor. What the results mean for companies and for the move to the EU ETS 2.",
    metaTitle: "First nEHS auction 2026: clearing price at the upper end of the price corridor | FuelCert",
    metaDescription:
      "Clearing price EUR 65.00/nEZ, allocated volume 21.34 million nEZ, allocation rate 7.32%: an assessment of the first nEHS auction 2026 and the transition to the EU ETS 2.",
    intro:
      "The first nEHS auction 2026 marks the transition from a fixed price to a price corridor. What the results mean for companies and for the move to the EU ETS 2.",
    image: nehsAuktionImage,
    imageAlt:
      "Laptop showing a chart of the first nEHS auction in Germany on a desk, with a city skyline and wind turbines in the background",
    paragraphs: [
      "With the first auctioning of national emission allowances (nEZ) in 2026, national emissions trading in Germany has entered the auction phase. According to the available results, the clearing price was EUR 65.00/nEZ. The allocated volume was 21.34 million nEZ and the total bid volume 291.71 million nEZ. This resulted in an average allocation rate of 7.32%.",
      "The results show that the market launch of the nEHS in 2026 met with strong interest. At the same time, the auction demonstrates that the statutory price corridor does not just exist on paper, but is already of practical relevance to market participants in the very first auction round.",
      "For companies in national emissions trading, 2026 is an important transitional year: after the fixed-price phase from 2021 to 2025, nEZ are now auctioned within a price corridor of 55 to 65 EUR/tCO₂. The German system therefore remains regulatorily contained for the time being, before a more market-based system takes effect with the transition to the EU ETS 2.",
      "At the same time, the start of the regular phase of the EU ETS 2 has been postponed by one year. Instead of 2027, the surrender obligation is now scheduled to begin in 2028. For Germany, this means that the transitional phase in the nEHS is extended. The price corridor therefore remains relevant in 2027 as well, before the previous national price limits are removed following the transition to the ETS 2.",
      "For the companies concerned, the first auction underlines how important it is to assess procurement strategy, register processes, reporting obligations and the regulatory interfaces between the nEHS and the ETS 2 at an early stage.",
    ],
  },
  {
    slug: "webinar-rueckblick-wasserstoffprojekte",
    title: "Webinar review: three insights for more economical hydrogen projects",
    date: "2026-06-29",
    dateLabel: "29 June 2026",
    teaser:
      "In our webinar as part of Hydrogen Week 2026, RFNBO certification, the GHG quota and the practical implementation of hydrogen marketing took centre stage. Three insights were particularly relevant to project economics.",
    metaTitle:
      "Webinar review: three insights for more economical hydrogen projects | FuelCert",
    metaDescription:
      "Review of the FuelCert webinar for Hydrogen Week 2026: optimising RFNBO production, calculating GHG quota revenues realistically, and mapping trailer logistics correctly in mass balancing.",
    intro:
      "In our webinar as part of Hydrogen Week 2026, RFNBO certification, the GHG quota and the practical implementation of hydrogen marketing took centre stage. Three insights were particularly relevant to project economics.",
    image: webinarRfnboImage,
    imageAlt:
      "Schematic representation of an electrolyser's electricity consumption before and after regulatory optimisation of the RFNBO operating mode",
    imageCaption:
      "Schematic representation of a regulatorily optimised RFNBO operating mode from the webinar.",
    paragraphs: [
      "As part of Hydrogen Week 2026, we discussed the practical implementation of RFNBO certification, the GHG quota and hydrogen marketing with more than 40 participants. We would like to thank everyone for the strong interest, the high level of participation and the open technical exchange.",
      "The webinar made clear that the economic viability of hydrogen projects depends not only on electricity costs and technology, but to a large extent also on a regulatorily sound design. Three points were particularly in focus:",
      "A central topic was the question of how to maximise RFNBO production without incurring unnecessary costs through oversized PPA procurement. The key here is the regulatorily sound use of the existing scope, for example through intelligent operation and a suitable balancing logic.",
      "For many projects, the GHG quota is a significant economic building block. In the webinar, we showed what matters for a robust revenue estimate and how different assumptions affect economic viability. For an initial assessment, a free revenue calculator is also available on our website.",
      "The distribution of hydrogen by trailer is also demanding from a regulatory perspective. So that certification, proof management and marketing later interlock reliably, the delivery and volume logic must be set up in a mass-balance-compliant way from the outset. This practical feasibility was another focus of the webinar.",
      "Our sincere thanks also go to our guest speakers from TÜV SÜD, WUN H2 and Rießner Gase for their valuable practical contributions and well-founded technical insights.",
      "The webinar review shows once again: economically viable hydrogen projects require not only technical concepts, but also a robust regulatory implementation along the entire process chain.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "As part of Hydrogen Week 2026, we discussed the practical implementation of RFNBO certification, the GHG quota and hydrogen marketing with more than 40 participants. We would like to thank everyone for the strong interest, the high level of participation and the open technical exchange.",
      },
      {
        type: "paragraph",
        text: "The webinar made clear that the economic viability of hydrogen projects depends not only on electricity costs and technology, but to a large extent also on a regulatorily sound design. Three points were particularly in focus:",
      },
      { type: "heading", text: "1. Optimising RFNBO production economically" },
      {
        type: "paragraph",
        text: "A central topic was the question of how to maximise RFNBO production without incurring unnecessary costs through oversized PPA procurement. The key here is the regulatorily sound use of the existing scope, for example through intelligent operation and a suitable balancing logic.",
      },
      { type: "heading", text: "2. Calculating GHG quota revenues realistically and completely" },
      {
        type: "paragraph",
        text: "For many projects, the GHG quota is a significant economic building block. In the webinar, we showed what matters for a robust revenue estimate and how different assumptions affect economic viability. For an initial assessment, a free revenue calculator is also available on our website.",
      },
      { type: "heading", text: "3. Mapping trailer logistics correctly in mass balancing" },
      {
        type: "paragraph",
        text: "The distribution of hydrogen by trailer is also demanding from a regulatory perspective. So that certification, proof management and marketing later interlock reliably, the delivery and volume logic must be set up in a mass-balance-compliant way from the outset. This practical feasibility was another focus of the webinar.",
      },
      {
        type: "paragraph",
        text: "Our sincere thanks also go to our guest speakers from TÜV SÜD, WUN H2 and Rießner Gase for their valuable practical contributions and well-founded technical insights.",
      },
      {
        type: "paragraph",
        text: "The presentations from the webinar are available for download here:",
      },
      {
        type: "download",
        label: "Download presentations",
        href: "https://cloud.fuelcert.com/s/x3ngHBsRFr5mENA",
      },
      {
        type: "paragraph",
        text: "The webinar review shows once again: economically viable hydrogen projects require not only technical concepts, but also a robust regulatory implementation along the entire process chain.",
      },
    ],
  },
  {
    slug: "softening-rfnbo-criteria-green-hydrogen-market-ramp-up",
    title:
      "Green hydrogen market ramp-up: softening of the current RFNBO criteria to unlock Europe’s green hydrogen potential",
    date: "2026-06-25",
    dateLabel: "25 June 2026",
    teaser:
      "16 German federal states are calling for a pragmatic review of the RFNBO criteria to strengthen investment certainty and accelerate the ramp-up of the European hydrogen economy.",
    metaTitle:
      "Green hydrogen market ramp-up: softening of the current RFNBO criteria | FuelCert",
    metaDescription:
      "16 German federal states ask EU Energy Commissioner Dan Jørgensen for a pragmatic review of the RFNBO criteria – for more investment certainty in the hydrogen ramp-up.",
    intro:
      "16 German federal states are calling for a pragmatic review of the RFNBO criteria to strengthen investment certainty and accelerate the ramp-up of the European hydrogen economy.",
    image: rfnboLaenderschreibenImage,
    imageAlt:
      "Joint letter from 16 German federal states to EU Energy Commissioner Dan Jørgensen bearing the coats of arms of the state ministries",
    imageCaption:
      "Joint letter from 16 German federal states to EU Energy Commissioner Dan Jørgensen on the review of the RFNBO criteria.",
    paragraphs: [
      "In a joint letter to EU Energy Commissioner Dan Jørgensen, 16 state ministers from Germany have called for a pragmatic further development of the current RFNBO criteria. The aim is to create investment certainty for electrolysis projects and to avoid slowing the ramp-up of the European hydrogen economy through overly complex requirements.",
      "At the heart of the letter is the concern that the existing requirements of Delegated Regulation (EU) 2023/1184 significantly increase the costs of many hydrogen projects and thereby delay or entirely prevent investment decisions. The letter points out that numerous large-scale electrolysis projects have postponed or fully stopped their final investment decision despite funding.",
      "The signatories argue that a regulatory framework for the market ramp-up must be simple, investable and practicable in the initial phase. In their view, however, the current RFNBO requirements often achieve the opposite: high complexity, uncertainty among project developers and industrial off-takers, and economic disadvantages compared with other electricity consumers. At the same time, they emphasise that electrolysers can make an important contribution to flexibility, sector coupling and system integration.",
      "In addition, a more consistent structuring of exemptions is suggested, for example by bundling the various exemptions within the Delegated Regulation. In the signatories' view, the review scheduled for 2028 should also be designed in such a way that investment certainty and long-term planning reliability for companies are preserved.",
      "The letter is a strong industrial and energy policy signal: the ramp-up of the hydrogen economy is understood not as an isolated regional task, but as a shared European project. Particularly for industrial and port locations as well as regions with high renewable expansion potential, a pragmatic yet robust regulatory framework is decisive. The announced review of the RFNBO criteria could thus become a key lever for investment and the further market ramp-up of renewable hydrogen in Europe.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "In a joint letter to EU Energy Commissioner Dan Jørgensen, 16 state ministers from Germany have called for a pragmatic further development of the current RFNBO criteria. The aim is to create investment certainty for electrolysis projects and to avoid slowing the ramp-up of the European hydrogen economy through overly complex requirements.",
      },
      { type: "heading", text: "High costs are slowing investment decisions" },
      {
        type: "paragraph",
        text: "At the heart of the letter is the concern that the existing requirements of Delegated Regulation (EU) 2023/1184 significantly increase the costs of many hydrogen projects and thereby delay or entirely prevent investment decisions. The letter points out that numerous large-scale electrolysis projects have postponed or fully stopped their final investment decision despite funding.",
      },
      { type: "heading", text: "Simple, investable and practicable" },
      {
        type: "paragraph",
        text: "The signatories argue that a regulatory framework for the market ramp-up must be simple, investable and practicable in the initial phase. In their view, however, the current RFNBO requirements often achieve the opposite: high complexity, uncertainty among project developers and industrial off-takers, and economic disadvantages compared with other electricity consumers. At the same time, they emphasise that electrolysers can make an important contribution to flexibility, sector coupling and system integration.",
      },
      { type: "heading", text: "Core elements of the proposed further development" },
      {
        type: "list",
        items: [
          "Extending the transitional phase for the additionality requirements until 2035",
          "More flexibility for temporal correlation, in particular the continued use of monthly correlation until 2035",
          "Examining whether lowering the threshold for the general exemption in electricity systems with very high shares of renewable energy could better support the objectives of the Delegated Regulation",
        ],
      },
      {
        type: "paragraph",
        text: "In addition, a more consistent structuring of exemptions is suggested, for example by bundling the various exemptions within the Delegated Regulation. In the signatories' view, the review scheduled for 2028 should also be designed in such a way that investment certainty and long-term planning reliability for companies are preserved.",
      },
      {
        type: "download",
        label: "Download the letter",
        href: "https://cloud.fuelcert.com/s/4f4434JHKctKQAg",
      },
      {
        type: "paragraph",
        text: "The letter is a strong industrial and energy policy signal: the ramp-up of the hydrogen economy is understood not as an isolated regional task, but as a shared European project. Particularly for industrial and port locations as well as regions with high renewable expansion potential, a pragmatic yet robust regulatory framework is decisive. The announced review of the RFNBO criteria could thus become a key lever for investment and the further market ramp-up of renewable hydrogen in Europe.",
      },
    ],
  },
  {
    slug: "nehs-preiskorridor-2027",
    title: "nEHS: 55 to 65 euro price corridor should also apply in 2027",
    date: "2026-07-08",
    dateLabel: "8 July 2026",
    teaser:
      "The Federal Ministry for the Environment has submitted a draft bill to amend the Fuel Emissions Trading Act. The CO₂ price corridor of 55 to 65 euros per tonne is therefore expected to apply in 2027 as well—extending the transition period to ETS 2.",
    metaTitle: "nEHS: CO₂ price corridor extended to 2027 | FuelCert",
    metaDescription:
      "The CO₂ price corridor in the national emissions trading scheme is set to remain at 55 to 65 euros in 2027. What the BEHG draft means for companies and for the transition to ETS 2.",
    intro:
      "The Federal Ministry for the Environment has submitted a draft bill to amend the Fuel Emissions Trading Act. The CO₂ price corridor of 55 to 65 euros per tonne is therefore expected to apply in 2027 as well—extending the transition period to ETS 2.",
    image: nehsPreiskorridor2027Image,
    imageAlt:
      "National emissions trading and transition to ETS 2 with a CO₂ price corridor of 55 to 65 euros",
    paragraphs: [
      "The Federal Ministry for the Environment, Nature Conservation, Nuclear Safety and Consumer Protection (BMUKN) has launched a consultation process with the Länder and associations for a draft third law amending the Fuel Emissions Trading Act (BEHG).",
      "At the heart of the draft is the planned extension of the existing price corridor: in 2027 as well, national emissions allowances (nEZ) are to be sold at prices between 55 and 65 euros per tonne of CO₂.",
      "The draft submitted now aims to extend price stability in national emissions trading by another year, giving companies in the nEHS greater planning security for procurement and surrender.",
      "However, the draft has not yet been agreed within the Federal Government; further changes may therefore still be made during the legislative process.",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "The Federal Ministry for the Environment, Nature Conservation, Nuclear Safety and Consumer Protection (BMUKN) has launched a consultation process with the Länder and associations for a draft third law amending the Fuel Emissions Trading Act (BEHG).",
      },
      {
        type: "paragraph",
        text: "The core of the draft is the planned extension of the existing price corridor: in 2027 as well, national emissions allowances (nEZ) are to be sold at prices between 55 and 65 euros per tonne of CO₂. This is intended to implement the price stability agreed in the coalition committee for national emissions trading.",
      },
      { type: "heading", text: "Price stability for another transition year" },
      {
        type: "paragraph",
        text: "Under the current legal situation, the 55 to 65 euro price corridor is initially planned for 2026. For 2027, the price would generally be oriented towards price developments in the European Emissions Trading Scheme.",
      },
      {
        type: "paragraph",
        text: "The draft submitted now aims to change this and extend the existing price corridor by another year. For companies in the nEHS, this would create additional planning security regarding procurement and surrender of national emissions allowances.",
      },
      {
        type: "paragraph",
        text: "However, the draft has not yet been agreed within the Federal Government. Further changes may therefore still occur during the legislative process.",
      },
      { type: "heading", text: "BEHV and BEDV are also to be adjusted" },
      {
        type: "paragraph",
        text: "The planned change affects more than just the BEHG. The Fuel Emissions Trading Ordinance (BEHV) is also expected to be adjusted to the extended price corridor.",
      },
      {
        type: "paragraph",
        text: "In addition, amendments to the BEHG double-balancing ordinance (BEDV) are planned. The aim is in particular to ensure an appropriate approach to stored fuel quantities when transitioning between the emissions trading systems.",
      },
      {
        type: "paragraph",
        text: "Comments on the draft are due by 15 July 2026 at 12:00.",
      },
      { type: "heading", text: "The transition to ETS 2 is getting closer" },
      {
        type: "paragraph",
        text: "The draft also shows how strongly the national emissions trading scheme is increasingly shaped by the upcoming transition to the European ETS 2.",
      },
      {
        type: "paragraph",
        text: "For affected companies, this is therefore no longer just about the current requirements of the nEHS. At the same time, the future requirements of ETS 2 are already gaining in importance. Even today, this involves preparation, monitoring and reporting obligations — as well as the question of how existing processes, data structures and responsibilities can be aligned to the European system.",
      },
      {
        type: "paragraph",
        text: "Companies that prepare their processes early can clarify interfaces between the nEHS and ETS 2 in good time and make later adjustments considerably easier.",
      },
      { type: "heading", text: "FuelCert supports you in the nEHS and ETS 2" },
      {
        type: "paragraph",
        text: "FuelCert supports companies with the practical implementation of the requirements from both the national and the European emissions trading framework.",
      },
      {
        type: "paragraph",
        text: "This includes in particular:",
      },
      {
        type: "list",
        items: [
          "Creating and further developing monitoring plans and emission reports",
          "Proof management for fuels and energy sources for which an emission factor of zero is to be used",
          "Support with reporting and processes with DEHSt",
          "Procurement of national emissions allowances (nEZ)",
          "Early preparation for the transition from the nEHS to ETS 2",
        ],
      },
    ],
  },
];

export const ALL_NEWS_SLUGS = NEWS_POSTS.map((post) => post.slug);

export function getNewsPost(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}
