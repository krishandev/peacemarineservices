export type SiteImage = {
  src: string;
  alt: string;
  className: string;
};

/** Approved client photographs (optimized derivatives). */
export const photos = {
  heroHarbour: {
    src: "/images/client/optimized/hero-container-ship-harbour.webp",
    alt: "Containership in harbour seen from a vessel deck, with a lifebuoy and safety gear in the foreground",
    className: "object-cover object-[center_42%]",
  },
  vesselAlongside: {
    src: "/images/client/optimized/vessel-alongside-berth.webp",
    alt: "Commercial tanker alongside a concrete berth under a clear sky, with an Australian flag on the accommodation",
    className: "object-cover object-[center_45%]",
  },
  tankerDeckPersonnel: {
    src: "/images/client/optimized/tanker-deck-personnel.webp",
    alt: "Personnel in high-visibility clothing on a tanker main deck among cargo piping and manifolds",
    className: "object-cover object-[center_40%]",
  },
  tankerDeckGreen: {
    src: "/images/client/optimized/tanker-deck-green.webp",
    alt: "Green tanker main deck with cargo piping, hatches and a shore shiploader at berth",
    className: "object-cover object-[center_35%]",
  },
  mooringWinch: {
    src: "/images/client/optimized/mooring-winch.webp",
    alt: "Mooring winch, wire rope drums and anchor chain on a commercial vessel deck",
    className: "object-cover object-[center_50%]",
  },
  rescueBoat: {
    src: "/images/client/optimized/rescue-boat-deck.webp",
    alt: "Orange rescue boat stowed on deck behind yellow safety railings, with a commercial ship in the harbour",
    className: "object-cover object-[center_40%]",
  },
  enclosedLifeboat: {
    src: "/images/client/optimized/enclosed-lifeboat.webp",
    alt: "Enclosed orange lifeboat on davits at a quay during a vessel safety equipment inspection",
    className: "object-cover object-[center_45%]",
  },
  bulkLoading: {
    src: "/images/client/optimized/bulk-carrier-loading.webp",
    alt: "Bulk carrier hatch covers and deck machinery beside a rust-coloured shiploader",
    className: "object-cover object-[center_45%]",
  },
  bulkHatches: {
    src: "/images/client/optimized/bulk-carrier-hatches.webp",
    alt: "Bulk carrier hatch covers and deck looking aft toward the accommodation and a shiploader",
    className: "object-cover object-[center_40%]",
  },
  bridgeGmdss: {
    src: "/images/client/optimized/bridge-gmdss.webp",
    alt: "Ship's bridge communications console with radios, printers and procedure documents beside the windows",
    className: "object-cover object-[center_40%]",
  },
  bridgeConsole: {
    src: "/images/client/optimized/bridge-console.webp",
    alt: "Navigation consoles and posted procedures on a commercial ship's bridge overlooking a harbour",
    className: "object-cover object-[center_45%]",
  },
  bridgeEcdis: {
    src: "/images/client/optimized/bridge-ecdis.webp",
    alt: "Electronic chart display and bridge navigation consoles looking out over open water",
    className: "object-cover object-[center_45%]",
  },
  bridgeWide: {
    src: "/images/client/optimized/bridge-wide.webp",
    alt: "Wide view of a commercial ship's bridge with helm consoles and port operations visible through the windows",
    className: "object-cover object-[center_45%]",
  },
  shipAtSea: {
    src: "/images/client/optimized/ship-at-sea.webp",
    alt: "Forward deck of a bulk carrier at sea, with other ships on the horizon",
    className: "object-cover object-[center_40%]",
  },
  containerGantries: {
    src: "/images/client/optimized/container-terminal-gantries.webp",
    alt: "Container stacks and gantry cranes at a commercial terminal, viewed from a ship's deck",
    className: "object-cover object-[center_45%]",
  },
  containerShipAlongside: {
    src: "/images/client/optimized/container-ship-alongside.webp",
    alt: "View along a vessel's rusty deck toward a containership and terminal cranes in harbour",
    className: "object-cover object-[center_40%]",
  },
  containerBay: {
    src: "/images/client/optimized/container-bay.webp",
    alt: "Looking up between stacked shipping containers and a cell-guide structure on a containership",
    className: "object-cover object-[center_40%]",
  },
  cargoLoading: {
    src: "/images/client/optimized/cargo-loading-wharf.webp",
    alt: "General cargo vessel alongside a wharf while bagged cargo is lifted by crane",
    className: "object-cover object-[center_40%]",
  },
  bulkDeckCrane: {
    src: "/images/client/optimized/bulk-deck-crane.webp",
    alt: "Ship's deck crane over a cargo deck while the vessel lies alongside a bulk terminal",
    className: "object-cover object-[center_35%]",
  },
} as const satisfies Record<string, SiteImage>;

/** Existing stock photographs retained where no matching client photo exists. */
export const stockPhotos = {
  dcvWorkboat: {
    src: "/images/services/amsa-dcv-marine-surveyor.webp",
    alt: "Surveyor inspecting a small commercial workboat at a harbour berth",
    className: "object-cover",
  },
  engineRoom: {
    src: "/images/services/technical-inspection-marine-engineering.webp",
    alt: "Marine diesel machinery and piping in a commercial ship engine room",
    className: "object-cover",
  },
  bunkerHose: {
    src: "/images/services/bunker-surveyor.webp",
    alt: "Fuel hose connected during a bunkering operation between vessels at harbour",
    className: "object-cover",
  },
} as const satisfies Record<string, SiteImage>;
