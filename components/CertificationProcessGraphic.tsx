import Image from "next/image";
import prozessGrafik from "@/assets/zertifizierung-prozess.png";

export function CertificationProcessGraphic() {
  return (
    <figure className="cert-process">
      <Image
        src={prozessGrafik}
        alt="Zertifizierungsprozess: FuelCert verbindet Produzenten, Prüfstelle, Umweltbundesamt, Quotenstelle und Wertschöpfungskette von Produktionsinputs über H2-, RFNBO- und Biokraftstoffproduktion bis zur Tankstelle"
        className="cert-process__img"
        width={1022}
        height={541}
        sizes="(max-width: 960px) 100vw, 50rem"
      />
    </figure>
  );
}
