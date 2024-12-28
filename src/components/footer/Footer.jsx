import React, { useEffect } from "react";
import "./footer.css";
import video from "../../assets/video.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dicta, animi nostrum at nobis rem magni blanditiis quod, esse
              dignissimos sunt laboriosam quos ex accusamus. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aliquam, doloremque.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Payment
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Oceania
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight />
                TripAdvisor
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - KVNGDEV</small>
            <small>{new Date().getFullYear()}</small>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
