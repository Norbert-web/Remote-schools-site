// src/modules/resource-library/resource.downloader.js
export function downloadResource(resourceId, url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = resourceId;
    a.click();
}