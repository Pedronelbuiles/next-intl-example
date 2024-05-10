import { useTranslations } from "next-intl";
import './globals.css'

export default function Home() {
  const translation = useTranslations('Index')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{translation('title')}</h1>
    </main>
  );
}
