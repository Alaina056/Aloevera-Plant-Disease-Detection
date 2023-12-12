import "./FooterStyles.css";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-text">
          <h2>AloeVera Plant Disease Detection</h2>
          <p>Keep Your Plant Healthy</p>
        </div>

        <div>
          <p>Coming Soon</p>
          <LinkedIn className="icons" />
          <Facebook className="icons" />
          <Insta className="icons" />
          <Twitter className="icons" />
        </div>
      </div>
      <div className="bottom ">
        <div>
          <h4>Contact Us On</h4>
          <p>03xxxxxxxxx </p>
          <p>abc@gmail.com</p>
        </div>

        <div>
          <h4>Pictures Credit</h4>

          <a href="https://www.pexels.com/photo/close-up-of-a-succulent-15725408/">
             Rafael Rodrigues
          </a>

          <a href="https://unsplash.com/@mbrunacr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Miguel Brunaon On 
          <a href="https://unsplash.com/photos/FPhfi9O-qqI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">&nbsp;Unsplash
          </a>
          </a>
          
          <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            charlesdeluvio On
          <a href="https://unsplash.com/photos/tErWBVfqdYo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          &nbsp;Unsplash
          </a>
          </a>

          <a href="https://unsplash.com/ja/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Kari Shea On
          <a href="https://unsplash.com/photos/YWzMoqGG0yc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          &nbsp;Unsplash
          </a>
          </a>

          <a href="https://unsplash.com/@alicemourou?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
           Alice Mourou On
          <a href="https://unsplash.com/photos/HPWZsiZ8xiQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          &nbsp;Unsplash
          </a>
          </a>

          <a href="https://unsplash.com/@_judenorman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Jude Smart On
          <a href="https://unsplash.com/photos/lE6z79guKI0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          &nbsp;Unsplash
          </a>
          </a>

          <a href="https://unsplash.com/fr/@monicore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Monika Stawowy On
          <a href="https://unsplash.com/photos/zOeoVqX-27U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          &nbsp;Unsplash
          </a>
          </a>

        </div>

        <div>
          <h4>Information Credit</h4>
          <a href="https://www.gardenguides.com/93474-aloe-plant-disease.html">
            Garden Guides
          </a>
        </div>
      </div>
      <div className="copyrights">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}Aloe-Disease. All rights
                reserved
              </p>
            </div>
    </div>
  );
};
export default Footer;
