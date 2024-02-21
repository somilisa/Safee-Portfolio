declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const content: Element<React.SVGAttributes>;
  export default content;
}
