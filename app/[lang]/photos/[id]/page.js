import PhotoDetails from "@/components/PhotoDetails";

export default function PhotosPage({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
