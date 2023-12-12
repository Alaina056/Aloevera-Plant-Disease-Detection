import "./DiseaseStyles.css";
import { Component, React } from "react";
import first_img1 from '../images/first_img.jpg'
import first_img2 from '../images/first_img2.jpg'

class DiseaseData extends Component {
  render() {
    return (
      <div className="first-dis">
        <div className="description">
          <h2>{this.props.heading}</h2>
          <p>
            {this.props.text}
          </p>
        </div>
        <div className="image">
          <img alt="Healthy Leaf" src={this.props.img1} />
          <img alt="Healthy Leaf" src={this.props.img2} />
        </div>
      </div>
    );
  }
}


export default DiseaseData;
