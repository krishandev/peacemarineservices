import { services as serviceEntries } from "@/data/services";

export const PHONE_DISPLAY = "+61 456 980 609";
export const PHONE_HREF = "tel:+61456980609";
export const OFFICE_PHONE_DISPLAY = "+61 08 62492720";
export const OFFICE_PHONE_HREF = "tel:+610862492720";
export const EMAIL = "info@pmsmarine.org";
export const EMAIL_HREF = "mailto:info@pmsmarine.org";
export const EMAIL_SECONDARY = "pmsoffshore@outlook.com";
export const EMAIL_SECONDARY_HREF = "mailto:pmsoffshore@outlook.com";
export const BUSINESS_NAME = "PMS Peace Marine Services";
export const BUSINESS_ADDRESS_LINES = [
  "9 Sheridan Crescent",
  "Willetton WA 6155",
  "Australia",
] as const;
export const GOOGLE_MAPS_HREF =
  "https://www.google.com/maps/place/Peace+Marine+Services+(PMS+Marine+Services)/@-32.0620861,115.7542118,12z/data=!4m6!3m5!1s0x2a32bd62db8b74cb:0x577d306cfb10641!8m2!3d-32.0660833!4d115.8864859!16s%2Fg%2F11trn5ghbj?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D";

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/our-services/", label: "Our Services", id: "services" as const },
  { href: "/service-areas/", label: "Service Areas", id: "areas" as const },
  { href: "/blog/", label: "Blog" },
  { href: "/guides/", label: "Guides" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
] as const;

export const services = serviceEntries.map((service) => ({
  href: service.href,
  label: service.label,
}));

export const serviceAreas = [
  { href: "/accredited-amsa-marine-surveyor-in-perth/", label: "Marine Surveyor in Perth" },
  { href: "/accredited-amsa-marine-surveyor-in-fremantle/", label: "Marine Surveyor in Fremantle" },
  { href: "/accredited-amsa-marine-surveyor-in-kwinana/", label: "Marine Surveyor in Kwinana" },
  { href: "/accredited-amsa-maritime-surveyor-in-bunbury/", label: "Marine Surveyor in Bunbury" },
  { href: "/accredited-amsa-maritime-surveyor-in-albany/", label: "Marine Surveyor in Albany" },
  { href: "/accredited-amsa-marine-surveyor-in-esperance/", label: "Marine Surveyor in Esperance" },
  { href: "/accredited-amsa-maritime-surveyor-in-geraldton/", label: "Marine Surveyor in Geraldton" },
  { href: "/accredited-amsa-maritime-surveyor-in-port-hedland/", label: "Marine Surveyor in Port Hedland" },
  { href: "/accredited-amsa-maritime-surveyor-in-dampier/", label: "Marine Surveyor in Dampier" },
  { href: "/accredited-amsa-maritime-surveyor-in-karratha/", label: "Marine Surveyor in Karratha" },
  { href: "/accredited-amsa-maritime-surveyor-in-pilbara/", label: "Marine Surveyor in the Pilbara" },
] as const;

export type MenuId = "services" | "areas";

export const servicesColumnOne = services.slice(0, 6);
export const servicesColumnTwo = services.slice(6);
export const serviceAreasColumnOne = serviceAreas.slice(0, 6);
export const serviceAreasColumnTwo = serviceAreas.slice(6);
