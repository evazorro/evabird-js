import Image from "next/image";
import EvabirdLogo from '@/app/ui/evabird-logo';
import SearchForm from "@/app/ui/search-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-900 p-4 md:h-52">
        <EvabirdLogo />
      </div>
      <SearchForm />
    </main>
  );
}
