import React from "react";
import { Section, ColInSection } from "../Layout";
import { Tile, TileOverlay } from "./CardStyles";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const Cards = ({
  presentersArr,
  presentationsArr,
  limit,
  withoutContainer,
  cardMargin,
  fullName,
}) => {
  const render = () => {
    if (presentersArr) {
      if (typeof presentersArr === "object") {
        return presentersArr.map((card, idx) => {
          // const profilePic = getImage(card.profilePicture.localFile)
          return (
          <Tile 
            to={`/${card.slug}`} 
            exact 
            key={card.id} 
            idx={idx}
            height='350px'
          >
            {card.profilePicture ? (
              <GatsbyImage image={getImage(card.profilePicture.localFile)} alt={card.fullName}/>
            ) : (
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={`${process.env.GATSBY_STRAPI_URL}/uploads/placeholder_e8d28bfc61.png`}
                alt=""
              />
            )}
            <TileOverlay>
              <h3>
                {card.fullName}
              </h3>
              <h3>
                {card.role}&nbsp;at&nbsp;{card.institution}
              </h3>
              <h3>{card.availableHours}&nbsp;hours available</h3>
            </TileOverlay>
          </Tile>
        )});
      } else {
        return <h2>Error fetching data</h2>;
      }
    } else if (presentationsArr) {
      if (typeof presentationsArr === "object") {
        return presentationsArr
          .slice(0, limit || presentationsArr.length)
          .map((card, idx) => {
            // const presentationImage = getImage(card.Image.localFile)
            return (
              <Tile
                to={`/${card.slug}`}
                exact
                key={card.id}
                idx={idx}
                margin={cardMargin}
                height='233px'
              >
              {card.image ? (
                <GatsbyImage image={getImage(card.image.localFile)} alt={card.name}/>
            ) : (
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={`${process.env.GATSBY_STRAPI_URL}/uploads/placeholder_e8d28bfc61.png`}
                alt=""
              />
            )}
                <TileOverlay>
                  <h3>{card.name}</h3>
                  {card.presenter && (
                    <h3>by&nbsp;{card.presenter.fullName}</h3>
                  )}
                  {fullName && (
                    <h3>by&nbsp;{fullName}</h3>
                  )}
                </TileOverlay>
              </Tile>
            );
          });
      } else {
        return <h2>Error fetching data</h2>;
      }
    }
    // return <h2>Loading...</h2>;
  };

  return withoutContainer ? (
    render()
  ) : (
    <Section padding="0px">
      <ColInSection
        col={1}
        display="flex"
        justifyContent="center"
        flexFlow="row wrap"
      >
        {render()}
      </ColInSection>
    </Section>
  );
};

export default Cards;
