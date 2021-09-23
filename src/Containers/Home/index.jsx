import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import { Input, Spinner } from "reactstrap";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import HomeWrapper from "./home.style";
import { sliderData, challenges } from "../../assets/data/data";
import Item from "../../components/common/challengeItem/item";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  const [searchkeyWord, setSearchkeyWord] = useState("");
  const [challengeList, setChallengeList] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setChallengeList(challenges);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    setSearchkeyWord(e.target.value);
    if (e.target.value.trim()) {
      const tempArr = challengeList.filter((challenge) => {
        if (
          challenge.name.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          return challenge;
        }
        // eslint-disable-next-line array-callback-return
        return;
      });
      setChallengeList([...tempArr]);
    } else {
      setChallengeList([...challenges]);
    }
  };
  const clearSearch = () => {
    setChallengeList([...challenges]);
    setSearchkeyWord("");
  };
  return (
    <HomeWrapper>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={2000}
        cssModule={AwesomeSliderStyles}
        bullets={false}
        animation="foldOutAnimation"
      >
        {sliderData.map((slider, key) => {
          return (
            <div
              className="full-width white-text height-inherit text-center caption-text py-3"
              key={key}
            >
              <div className="position-absolute left0 right0 offset-2 col-8">
                {slider.content1 && slider.content1}
              </div>
              <img
                alt={key}
                src={slider.image}
                className="full-width height-inherit"
              />
              <div className="position-absolute left0 right0 bottom0 offset-2 col-8">
                {slider.content2 && slider.content2}
              </div>
            </div>
          );
        })}
      </AutoplaySlider>

      <div className="container mt-100 mb-50 mobile-spacing">
        <div className="col-12 col-sm-7 col-md-6 col-lg-4 pa-0 mb-20">
          <span className="search-icon">
            <IoMdSearch />
          </span>
          <Input
            type="text"
            id="search"
            placeholder="Search battle"
            onChange={handleSearch}
            value={searchkeyWord}
            className="pl-35"
          />
          {searchkeyWord !== "" && (
            <span
              className="search-clear-icon cursor-pointer"
              onClick={clearSearch}
            >
              <IoMdClose />
            </span>
          )}
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 col-xl-9">
            <h2 className="text-center text-md-left">Challenge List</h2>
            {loader ? (
              <div className="text-center mt-4">
                <Spinner
                  style={{ color: "#76c047", width: "3rem", height: "3rem" }}
                />
              </div>
            ) : (
              <div>
                {challengeList.length ? (
                  <div>
                    {challengeList.map((challenge, i) => {
                      return (
                        <div key={i}>
                          <Item key={i} challenge={challenge} />
                          {i !== challenges.length - 1 && (
                            <hr className="seprator" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-40">
                    <h4 className="text-center">No record Found</h4>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
