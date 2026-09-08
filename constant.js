const PANORAMA_ITEMS = [
  {
    id: "hall-1",
    title: "Grand Exhibition Hall 1",
    src: "assets/Hall 1.jpg.jpeg",
    thumbnail: "assets/Hall 1.jpg.jpeg",
    pitch: 0,
    yaw: 0,
    hfov: 100
  },
  {
    id: "atrium-pavilion",
    title: "Atrium Pavilion View",
    src: "assets/20260906_120438_799.jpg.jpeg",
    thumbnail: "assets/20260906_120438_799.jpg.jpeg",
    pitch: -2,
    yaw: 30,
    hfov: 100
  },
  {
    id: "contemporary-suite",
    title: "Contemporary Architecture Suite",
    src: "assets/20260906_121351_644.jpg.jpeg",
    thumbnail: "assets/20260906_121351_644.jpg.jpeg",
    pitch: 0,
    yaw: 60,
    hfov: 100
  },
  {
    id: "gallery-corridor",
    title: "Panoramic Gallery Corridor",
    src: "assets/20260906_121851_520.jpg.jpeg",
    thumbnail: "assets/20260906_121851_520.jpg.jpeg",
    pitch: 5,
    yaw: -45,
    hfov: 100
  },
  {
    id: "horizon-lounge",
    title: "Lobby Horizon Lounge",
    src: "assets/20260906_122533_373.jpg.jpeg",
    thumbnail: "assets/20260906_122533_373.jpg.jpeg",
    pitch: 0,
    yaw: 15,
    hfov: 100
  },
  {
    id: "conference-center",
    title: "Executive Conference Center",
    src: "assets/20260906_161442_066.jpg.jpeg",
    thumbnail: "assets/20260906_161442_066.jpg.jpeg",
    pitch: -3,
    yaw: 90,
    hfov: 100
  },
  {
    id: "terrace-vista",
    title: "Open Terrace Vista",
    src: "assets/20260906_161625_570.jpg.jpeg",
    thumbnail: "assets/20260906_161625_570.jpg.jpeg",
    pitch: 2,
    yaw: -120,
    hfov: 100
  },
  {
    id: "interior-courtyard",
    title: "Interior Courtyard Perspective",
    src: "assets/20260906_161815_737.jpg.jpeg",
    thumbnail: "assets/20260906_161815_737.jpg.jpeg",
    pitch: 0,
    yaw: 45,
    hfov: 100
  },
  {
    id: "mezzanine-hall",
    title: "Skyline Mezzanine Hall",
    src: "assets/20260906_162209_438.jpg.jpeg",
    thumbnail: "assets/20260906_162209_438.jpg.jpeg",
    pitch: -5,
    yaw: -90,
    hfov: 100
  },
  {
    id: "studio-gallery",
    title: "Architectural Studio Gallery",
    src: "assets/20260906_164510_504.jpg.jpeg",
    thumbnail: "assets/20260906_164510_504.jpg.jpeg",
    pitch: 0,
    yaw: 180,
    hfov: 100
  }
];

if (typeof window !== "undefined") {
  window.PANORAMA_ITEMS = PANORAMA_ITEMS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PANORAMA_ITEMS };
}
