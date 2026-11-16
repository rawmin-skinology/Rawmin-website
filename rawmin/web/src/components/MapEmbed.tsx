import { SITE, mapsQuery } from "@/lib/site";

export default function MapEmbed() {
  const src = SITE.mapEmbed || `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;
  return (
    <div className="map">
      <iframe title="Map showing the RAWMIN SKINOLOGY location in Faridabad, Haryana" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      <a className="btn ghost" href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`} target="_blank" rel="noopener">Get directions in Google Maps</a>
    </div>
  );
}
