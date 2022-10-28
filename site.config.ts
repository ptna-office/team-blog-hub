export const config = {
  siteMeta: {
    title: "ピティナ・東音の楽屋口",
    teamName: "ptna_office",
    description: "Under Construction...",
  },
  siteRoot: process.env.NODE_ENV === "production" ? "" : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://corporate.piano.or.jp/index.html",
    },
  ],
};
