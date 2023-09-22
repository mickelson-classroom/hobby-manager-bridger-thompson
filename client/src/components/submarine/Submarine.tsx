import "./submarine.scss";

export const Submarine = () => {
  return (
    <div className="sea">
      <div className="circle-wrapper">
        <div className="bubble"></div>
        <div className="submarine-wrapper">
          <div className="submarine-body">
            <div className="window"></div>
            <div className="engine"></div>
            <div className="light"></div>
          </div>
          <div className="helix"></div>
          <div className="hat">
            <div className="leds-wrapper">
              <div className="periscope"></div>
              <div className="leds"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
