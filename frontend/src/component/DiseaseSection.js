import "./DiseaseStyles.css";
import first_img1 from '../images/first_img.jpg'
import first_img2 from '../images/first_img2.jpg'
import sec_img1 from '../images/sec_img1.jpg'
import sec_img2 from '../images/sec_img2.jpg'
import third_img1 from '../images/third_img1.jpg'
import third_img2 from '../images/third_img2.jpg'


import DiseaseData from "./DiseaseData";


const Disease = () => {
  return (
    <div className="disease">
      <h1>Aloe Vera Plant</h1>

      
      <DiseaseData
      heading='Healthy Leaf'
      text='A healthy Aloe Vera leaf that is plump, firm, and has a vibrant
      green color. It should be free from any discoloration, pests, or
      insects.Its firm leaves can provide numerous benefits for both
      skincare and overall health.'
      img1={first_img1}
      img2={first_img2}
      />

<DiseaseData
      heading='Aloe Rust'
      text='Aloe rust is a plant fungus that affects succulent aloe plants.
      The fungus creates round black or brown spots on the leaves. The
      fungus is self-limiting, and does not spread beyond the spots that
      are affected..'
      img1={sec_img1}
      img2={sec_img2}
      />

<DiseaseData
      heading='Stem Rot'
      text='Stem rot is the result of cold or wet conditions. This condition
      leads to rotting stems. The base of the plant is usually affected.
      Rotted aloe tissues affected by basal stem rot turn black or
      reddish brown.'
      img1={third_img1}
      img2={first_img2}
      />
    </div>
  );
};

export default Disease;
