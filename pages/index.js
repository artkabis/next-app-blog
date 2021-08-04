import Link from "next/link";
import Layout from "../composants/Layout";
//import styles from "../styles/Home.module.css";
import React from "react";
import Carousel from "./api/Carousel";

export default function Home() {
  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Layout>
        <Carousel slides={slides} />
        <h2>
          2 raisons de choisir Artkabis pour votre projet : prise en charge de A
          à Z et services personnalisés
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