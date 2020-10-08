import React, { Component } from "react";
import ItemGlasses from "./ItemGlasses";

const listGlasses = [
  {
    imgGlasses: "./img/glassesImage/v1.png",
    priceGlasses: " $50",
    branchGlasses: "DIOR G8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v2.png",
    priceGlasses: " $100",
    branchGlasses: "GUCCI GGG8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v3.png",
    priceGlasses: " $1040",
    branchGlasses: "DIOR GGG8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v4.png",
    priceGlasses: " $5043",
    branchGlasses: "DIOR G8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v5.png",
    priceGlasses: " $160",
    branchGlasses: "GUCCI GGG8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v6.png",
    priceGlasses: " $160",
    branchGlasses: "CHANEL GGG8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v7.png",
    priceGlasses: " $150",
    branchGlasses: "DIOR G8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v8.png",
    priceGlasses: " $80",
    branchGlasses: "CHANEL G8759H",
  },
  {
    imgGlasses: "./img/glassesImage/v9.png",
    priceGlasses: " $50",
    branchGlasses: "DIOR G8759H",
  },
];

export default class Glasses extends Component {
  state = {
    currentGlasses: {
      imgGlasses: "./img/glassesImage/v9.png",
      priceGlasses: " $50",
      branchGlasses: "DIOR G8759H",
    },
  };
  SelectGlasses = (gll) => {
    this.setState({
      currentGlasses: gll,
    });
  };
  renderListGlasses = (items) => {
    return (
      <div className="col-3">
        <button
          onClick={() => this.SelectGlasses(items)}
          className="btn btn-outline-secondary"
        >
          <img
            src={items.imgGlasses}
            alt="hinh"
            style={{ width: 100, borderRadius: 20 }}
          />
        </button>
      </div>
    );
  };
  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <ItemGlasses product={this.state.currentGlasses} />
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                {listGlasses.map((i,index)=>  <div key={index}> {this.renderListGlasses(i)}</div>)}
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

