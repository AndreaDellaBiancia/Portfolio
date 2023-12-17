function CardProject() {
  const CARDSIZE = 500;
  const CARDWIDTH = 600;
  const CARDBORDERRADIUS = CARDSIZE * 0.1;
  //TITLE
  const CARDTITLEPOS = CARDWIDTH * 0.21;
  //IMG
  const CARDIMGHEIGHT = CARDSIZE * 0.5;
  const CARDIMGWIDTH = "100%";
  const CARDIMGMARGINTOP = CARDSIZE * 0.02;
  //TEXT
  const CARDTXTHEIGHT = CARDSIZE * 0.4;
  const CARDTXTWIDTH = CARDWIDTH * 0.9;
  const CARDTXTMARGIN = CARDSIZE * 0.05;

  

  return (
    <div
      className="cardContainer"
      style={{
        height: CARDSIZE,
        width: CARDWIDTH,
        borderRadius: CARDBORDERRADIUS,
        border: "2px solid black",
        backgroundColor: "white",
      }}
    >
      <div className="titleContainer">
        <span id="rating">
        </span>
        <div id="title" style={{ right: CARDTITLEPOS }}>
          TITLE
        </div>
      </div>
      <div
        className="cardImgContainer"
        style={{
          height: CARDIMGHEIGHT,
          width: CARDIMGWIDTH,
          borderRadius: CARDBORDERRADIUS,
          marginTop: CARDIMGMARGINTOP,
        }}
      >
        <img
          src="https://picsum.photos/800/200/?random"
          alt="1"
          style={{
            height: CARDIMGHEIGHT,
            width: CARDIMGWIDTH,
            borderRadius: CARDBORDERRADIUS
          }}
        />
      </div>

      <div
        className="cardTextContainer"
        style={{
          height: CARDTXTHEIGHT,
          width: CARDTXTWIDTH,
          borderRadius: CARDBORDERRADIUS,
          marginTop: CARDTXTMARGIN,
          marginBottom: CARDTXTMARGIN
        }}
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat totam cupiditate consectetur accusantium dicta aspernatur corporis enim amet quis laudantium, saepe molestias debitis maxime et, veniam architecto ipsam distinctio! Minus?</div>
    </div>
  );
}
  
export default CardProject;