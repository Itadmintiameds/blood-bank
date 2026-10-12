import React from 'react';

// Resolves to the "CurePlus Blood Centre" Google Maps listing (Dakshina Murthy Towers, Udayagiri, Mysuru).
const MAP_QUERY = 'CurePlus Blood Centre Mysuru';

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

const LocationMap = ({ className = '' }: { className?: string }) => (
  <iframe
    src={MAP_SRC}
    title="Map showing the location of CurePlus Blood Center, Mysuru"
    className={`w-full border-0 rounded-lg ${className}`}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
);

export default LocationMap;
