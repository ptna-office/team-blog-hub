import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "ptnyan",
    name: "ぴてぃにゃん",
    role: "mascot",
    bio: "ぴてぃにゃん公式キャラクター",
    avatarSrc: "/avatars/ptnyan.jpg",
    sources: ["https://www.piano.or.jp/atom.xml"],
    twitterUsername: "ptna_web",
    websiteUrl: "https://corporate.piano.or.jp/ptnyan/index.html",
  },
  {
    id: "11",
    name: "Hiroyuki Noguchi",
    role: "CTO",
    bio: "ピティナ（一般社団法人全日本ピアノ指導者協会） 本部CTO／株式会社東音企画 外部 CTO。",
    avatarSrc: "/avatars/hi-noguchi.png",
    sources: ["https://qiita.com/Hi_Noguchi/feed", "https://zenn.dev/hi_noguchi/feed"],
    twitterUsername: "Hi_Noguchi",
    githubUsername: "hi-noguchi",
    websiteUrl: "https://hi-noguchi.com/",
  },
  {
    id: "90",
    name: "Victor Manuel",
    role: "Flutter app developer",
    bio: "Mexican, living in Japan Tokyo. I'm iOS, Android developer. メキシコ人日本に住んでいました。エンジニア iOS + Flutter + Android, 納豆が好きです。",
    avatarSrc: "/avatars/victor_manuel.png",
    sources: ["https://medium.com/feed/@victormanuellagunas"],
    twitterUsername: "VicktorManuel",
    githubUsername: "victormanuelfrancodev",
  },
];
