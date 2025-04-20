
export const getUrlWithUtm = (baseUrl: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  const newUrl = new URL(baseUrl);
  utmParams.forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      newUrl.searchParams.set(param, value);
    }
  });
  
  return newUrl.toString();
};
