import React, { Component } from "react";
import ItemGlasses from "./ItemGlasses";

const listGlasses = [
  {
    imgGlasses: "./img/glassesImage/v1.png",
    priceGlasses: " $50",
    brachGlasses: "DIOR G8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v2.png",
    priceGlasses: " $100",
    brachGlasses: "GUCCI GGG8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v3.png",
    priceGlasses: " $1040",
    brachGlasses: "DIORS GGG8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v4.png",
    priceGlasses: " $5043",
    brachGlasses: "DIOR G8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v5.png",
    priceGlasses: " $160",
    brachGlasses: "GUCCI GGG8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v6.png",
    priceGlasses: " $160",
    brachGlasses: "DIORS GGG8759H",
  },
];

export default class Glasses extends Component {
  state = {
    currentGlass: {
      imgGlasses: "./img/glassesImage/v1.png",
      priceGlasses: " $50",
      brachGlasses: "GUCCI G8759H",
    },
  };
  SelectGlasses = (glassItem) => {
    console.log(glassItem);
    this.setState({
      currentGlass: glassItem,
    });
  };

  renderGlass = (item) => {
    return (
      <div className="col-3">
        <button
          onClick={() => this.SelectGlasses(item)}
          className="btn btn-outline-secondary"
        >
          <img
            src={item.imgGlasses}
            alt="hinh"
            style={{ width: 100, borderRadius: 20 }}
          />
        </button>
      </div>
    );
  };

  render() {
    console.log("===", this);
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <div className="col-sm-4">
                <ItemGlasses product={this.state.currentGlass} />
              </div>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                {listGlasses.map((i) => this.renderGlass(i))}
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
