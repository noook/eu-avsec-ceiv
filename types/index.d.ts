declare module '*.png' {
  const image: string;

  export default image;
}
declare module '*.jpg' {
  const image: string;

  export default image;
}

interface LocalizedAsset {
  fr: string;
  en: string;
}
