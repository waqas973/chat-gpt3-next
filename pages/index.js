import { Inter } from "@next/font/google";
import Chat from "../components/Chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Chat />
    </>
  );
}
