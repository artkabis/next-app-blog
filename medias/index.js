import media1 from "./slide-1.jpg";
import media2 from "./slide-2.jpg";
import media3 from "./slide-3.jpg";

export const media = [media1, media2, media3];
export const mediaByIndex = (index) => media[index % media.length];
