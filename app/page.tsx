import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/Services";
import SearchForm from "@/components/SearchForm";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="inline-block max-w-xl text-center justify-center">
        <SearchForm></SearchForm>
        <Divider></Divider>
        <section className="mt-4">
          <span className={title()}>Esplora il&nbsp;</span>
          <span className={title({ color: "cyan" })}>Mediterraneo&nbsp;</span>
          <br />
          <span className={title()}>
            a prezzi imbattibili con le migliori offerte Last Minute di MSC Crociere
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Occasioni speciali da non perdere
          </div>
        </section>
        <Divider></Divider>
      </div>
      <div className="flex gap-3">
        <Services></Services>
      </div>
    </section>

  );
}
