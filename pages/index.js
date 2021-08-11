import Link from "next/link";
import Layout from "../composants/Layout";
import React from "react";
import Carousel from "../composants/Slider/Carousel";

export default function Home() {
  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Layout>
        <Carousel slides={slides} />
        <h1 className="titleH1">
          Artkabis
          <span className="titleSpan1">Création de site web</span>
          <span className="titleSpan2">sur-mesure</span>
          <span className="titleSpan3">dans le Grand Angoulême</span>
        </h1>
        <h2>
          2 raisons de choisir{" "}
          <Link href="https://artkabis.fr">
            <a>Artkabis</a>
          </Link>{" "}
          pour votre projet : prise en charge de A à Z et services personnalisés
        </h2>
        <p>
          Création de wireframes, infographies, sites web modernes, web services
          (modules de réservation, calculateurs divers, gestion API, etc). Nous
          vous accompagnons pour développer votre business via la création de
          plateforme e-commerce (Woocommerce, Shopify, Ecwid, etc)
        </p>
      </Layout>
    </>
  );
}
