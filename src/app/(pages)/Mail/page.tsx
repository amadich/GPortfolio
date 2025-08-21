'use client';
import MessagesPage from "./components/MessagePage";
import LoadingShow from "@/components/LoadingShow";

export default function Home() {

  return (
    <main>
      <LoadingShow />
      <MessagesPage />
    </main>
  );
}
