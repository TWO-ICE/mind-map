export function walk(
  root: any,
  parent: any,
  beforeCallback: any,
  afterCallback: any,
  isRoot: any,
  layerIndex?: number,
  index?: number
): void
export function bfsWalk(root: any, callback: any): void
export function resizeImgSizeByOriginRatio(
  width: any,
  height: any,
  newWidth: any,
  newHeight: any
): any[]
export function resizeImgSize(
  width: any,
  height: any,
  maxWidth: any,
  maxHeight: any
): any[]
export function resizeImg(
  imgUrl: any,
  maxWidth: any,
  maxHeight: any
): Promise<any>
export function getStrWithBrFromHtml(str: any): any
export function simpleDeepClone(data: any): any
export function copyRenderTree(
  tree: any,
  root: any,
  removeActiveState?: boolean
): any
export function copyNodeTree(
  tree: any,
  root: any,
  removeActiveState?: boolean,
  keepId?: boolean
): any
export function imgToDataUrl(src: any): Promise<any>
export function parseDataUrl(data: any): any
export function downloadFile(file: any, fileName: any): void
export function throttle(
  fn: any,
  time: number,
  ctx: any
): (...args: any[]) => void
export function asyncRun(taskList: any, callback?: () => void): void
export function degToRad(deg: any): number
export function camelCaseToHyphen(str: any): any
export function measureText(
  text: any,
  {
    italic,
    bold,
    fontSize,
    fontFamily
  }: {
    italic: any
    bold: any
    fontSize: any
    fontFamily: any
  }
): {
  width: any
  height: any
}
export function joinFontStr({
  italic,
  bold,
  fontSize,
  fontFamily
}: {
  italic: any
  bold: any
  fontSize: any
  fontFamily: any
}): string
export function nextTick(fn: any, ctx: any): () => void
export function checkNodeOuter(
  mindMap: any,
  node: any
): {
  isOuter: boolean
  offsetLeft: number
  offsetTop: number
}
export function getTextFromHtml(html: any): any
export function readBlob(blob: any): Promise<any>
export function nodeToHTML(node: any): any
export function getImageSize(src: any): Promise<any>
export function createUid(): any
export function loadImage(imgFile: any): Promise<any>
export function removeHTMLEntities(str: any): any
export function getType(data: any): any
export function isUndef(data: any): boolean
export function removeHtmlStyle(html: any): any
export function addHtmlStyle(html: any, tag: any, style: any): any
export function checkIsRichText(str: any): boolean
export function replaceHtmlText(
  html: any,
  searchText: any,
  replaceText: any
): any
export function isWhite(color: any): boolean
export function isTransparent(color: any): boolean
export function getVisibleColorFromTheme(themeConfig: any): any
export function nodeRichTextToTextWithWrap(html: any): string
export function textToNodeRichTextWithWrap(html: any): string
export function isMobile(): boolean
export function getObjectChangedProps(oldObject: any, newObject: any): {}
export function checkIsNodeStyleDataKey(key: any): boolean