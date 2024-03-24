import Banner from "@/components/banner";
import Header from "@/components/header";
import Split from "@/components/split";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Split />
        <Split />
      </main>
    </>
  );
}
