declare module '*.png' {
  const image: string;

  export default image;
}

interface LocalizedAsset {
  [key: string]: any;
}
