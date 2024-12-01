import ProfileDetails from "@/components/ProfileDetails";

export default function ProfilePage({ params: { name, lang } }) {
  const authorName = decodeURIComponent(name);

  return <ProfileDetails name={authorName} lang={lang} />;
}
