
export const getRedirectPublicationPath = () => {
  const location = window.location.pathname;
  const cleanPath = location.endsWith('/') ? location.slice(0, -1) : location;
  const pathname = cleanPath.split('/').slice(0, -1).join('/');
  return `${pathname}/success`;
};
