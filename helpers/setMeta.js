export const setMeta = (title, description, image) => {
  return [
    {
      hid: 'og:title',
      name: 'og:title',
      content: title,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: image,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: image,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
  ];
};
