export const getPublicationRoute = title => {
  switch (title) {
    case 'ingrid':
      return '/catalog/poetics-and-politics-of-erasure';
    case 'karina':
      return '/catalog/artificial-intelligence-never-has-a-headache';
    case 'sophieeline':
      return '/catalog/radio-techno-fossil';
    case 'lisa':
      return '/catalog/meaning-seeking-animals';

    default:
      break;
  }
};
