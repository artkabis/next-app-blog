const stringToHTML = (str) => {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.getElementsByClassName("contentSlide");
};

const ContentSlide = (contentid) => {
  const content = {
    0: `<h1 className={styles.titleH1}>
  Artkabis
  <span className={styles.titleSpan1}> Création de site web</span>
  <span className={styles.titleSpan2}>sur-mesure</span>
  <span className={styles.titleSpan3}>dans le Grand Angoulême</span>
</h1>
<p>
  Propulsez votre image et augmentez votre force de vente dans votre
  secteur
</p>`,
    1: `
    <h1 className={styles.titleH1}>
        Artkabis
        <span className={styles.titleSpan1}> Création de site web</span>
        <span className={styles.titleSpan2}>sur-mesure</span>
        <span className={styles.titleSpan3}>dans le Grand Angoulême</span>
      </h1>
      <p>
        contenu slide 2
      </p>`,
    2: `<h1 className={styles.titleH1}>
      Artkabis
      <span className={styles.titleSpan1}> Création de site web</span>
      <span className={styles.titleSpan2}>sur-mesure</span>
      <span className={styles.titleSpan3}>dans le Grand Angoulême</span>
    </h1>
    <p>
      contenu slide 3
    </p>`,
  };
  console.log("index >>> ", contentid.content, content[contentid.content]);
  var cmp = contentid.content;
  return (
    <>
      <div className="contentSlide">{}</div>
    </>
  );
};
export default ContentSlide;
