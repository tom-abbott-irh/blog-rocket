export const SocialApps = {
  twitter: 'twitter',
  facebook: 'facebook',
  linkedIn: 'linkedIn',
  gitHub: 'gitHub',
  instagram: 'instagram',
};

export const siteMap = {
  title: 'Blog Rocket',
  about: {
    name: 'Jane Doe',
    description: 'Full Stack Developer',
    photo: '/images/avatar-photo.png',
  },
  menu: [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 3,
      name: 'About',
      link: '/about',
    },
  ],
  social: [
    {
      icon: SocialApps.facebook,
      link: 'https://facebook.com/',
    },
    {
      icon: SocialApps.gitHub,
      link: 'https://github.com/',
    },
    {
      icon: SocialApps.twitter,
      link: 'https://twitter.com/',
    },
    {
      icon: SocialApps.linkedIn,
      link: 'https://linkedin.com/',
    },
    {
      icon: SocialApps.instagram,
      link: 'https://instagram.com/',
    },
  ],
};
