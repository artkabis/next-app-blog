import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./CarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import { mediaByIndex } from "../../medias";
import Image from "next/image";
import ContentSlide from "./ContentSlide";
import styles from "../../styles/Carousel.module.css";

const Carousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                  <Image
                    className={styles.embla__slide__img}
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                    width={1200}
                    heigth={500}
                  />
                  <ContentSlide contentid={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className={styles.embla__dots}>  
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;

/*

<h1 className={styles.titleH1}>
            Artkabis
            <span className={styles.titleSpan1}> Création de site web</span>
            <span className={styles.titleSpan2}>sur-mesure</span>
            <span className={styles.titleSpan3}>dans le Grand Angoulême</span>
          </h1>
          <p>
            Propulsez votre image et augmentez votre force de vente dans votre
            secteur
          </p>
          */
