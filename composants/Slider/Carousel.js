import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./CarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import { mediaByIndex } from "../../medias";
import Image from "next/image";
import ContentSlide from "./ContentSlide";
import styles from "../../styles/Carousel.module.css";

const PARALLAX_FACTOR = 1.2;
const AUTOPLAY_INTERVAL = 2000;

const Carousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    containScroll: "trimSnaps",
    loop: false,
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [parallaxValues, setParallaxValues] = useState([]);
  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);
  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.dangerouslyGetEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
    });
    setParallaxValues(styles);
  }, [embla, setParallaxValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    embla.on("pointerDown", stop);
    embla.on("resize", onScroll);
  }, [embla, onSelect, onScroll, stop]);
  useEffect(() => {
    play();
  }, [play]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                  <div
                    className="embla__slide__parallax"
                    style={{
                      transform: `translateX(${parallaxValues[index]}%)`,
                    }}
                  >
                    <Image
                      className={styles.embla__slide__img}
                      src={mediaByIndex(index)}
                      alt="Image Slider i love nextjs"
                      width={1200}
                    />
                    <ContentSlide contentid={index} />
                  </div>
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
