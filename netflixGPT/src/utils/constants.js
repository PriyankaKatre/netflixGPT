export const logo =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const bgImage =
  'https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/42fb78f2-f5de-4a30-a9c7-2e9d1e05d9b8/GB-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b9a6d365-611b-4851-b907-4505b4230f79_large.jpg';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // @ts-ignore
    Authorization: import.meta.env.VITE_APP_TMDB,
  },
};

export const img_CDN = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
  { identifier: 'spanish', name: 'Spanish' },
];

// @ts-ignore
export const openai_key = import.meta.env.VITE_APP_OPENAI;
