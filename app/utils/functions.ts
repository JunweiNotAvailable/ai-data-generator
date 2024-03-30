export const randInt = (a: number, b: number) => Math.floor(Math.random() * (b - a)) + a;
export const randString = (length: number) => Array.from({ length: length }, () => Math.random().toString(36).charAt(2)).join('');

export const getFileSize = (content: string) => {
  const len = content.length;
  if (len > 1000000000) return `${(len / 1000000000).toFixed(1)}GB`;
  if (len > 1000000) return `${(len / 1000000).toFixed(1)}MB`;
  if (len > 1000) return `${(len / 1000).toFixed(1)}KB`;
  return `${len}B`;
}

// convert string to ArrayBuffer
export const stringToArrayBuffer = (string: string) => {
  let byteArray = new Uint8Array(string.length);
  for(let i = 0; i < string.length; i++) {
    byteArray[i] = string.codePointAt(i) || 0;
  }
  return byteArray;
}

// save the file to local
export const saveBufferAsFile = (byteArray: Uint8Array, filePath: string, contentType: string): void => {
  // Convert the ArrayBuffer to a Blob
  const blob = new Blob([byteArray], { type: contentType });
  // Create a Blob URL
  const blobUrl = window.URL.createObjectURL(blob);
  // Create a download link and trigger the download
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = filePath;
  // Programmatically click the link to trigger the download
  a.click();

  // Revoke the Blob URL to release resources
  window.URL.revokeObjectURL(blobUrl);
}
