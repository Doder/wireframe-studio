export const downloadImage = (MIME_TYPE) => {
  const canvasElement = document.getElementsByTagName('canvas')[0];
  const imgURL = canvasElement.toDataURL(MIME_TYPE);

  const dlLink = document.createElement('a');
  dlLink.download = 'wireframe';
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
};