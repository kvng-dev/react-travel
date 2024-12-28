import React, { useEffect } from "react";
import "./main.css";
import img from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: "France",
      location: "Europe",
      grade: "CULTURAL RELAX",
      fees: "$50 - $200",
      description:
        "France is renowned for its rich history, stunning architecture, and world-class cuisine. Paris, the capital city, is famous for landmarks like the Eiffel Tower and the Louvre Museum. The French Riviera, the wine regions of Bordeaux, and the picturesque countryside are also major attractions.",
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: "Spain",
      location: "Europe",
      grade: "A",
      fees: "$40 - $150",
      description:
        "Spain offers vibrant culture, beautiful beaches, and historic cities. Key attractions include the Sagrada Familia in Barcelona, the Alhambra in Granada, and the lively atmosphere of Madrid. Spanish cuisine, such as tapas and paella, is world-famous.",
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "Italy",
      location: "Europe",
      grade: "A",
      fees: "$45 - $180",
      description:
        "Italy is celebrated for its art, history, and culinary delights. Rome, Venice, Florence, and Milan are popular cities that offer ancient ruins, Renaissance art, and fashion. The Amalfi Coast and Tuscany provide stunning landscapes and world-renowned wines.",
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: "United States",
      location: "North America",
      grade: "A",
      fees: "$60 - $250",
      description:
        "The United States is diverse, featuring everything from bustling cities like New York and Los Angeles to natural wonders such as the Grand Canyon and Yellowstone National Park. The country offers varied experiences including world-class museums, entertainment, and outdoor adventures.",
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: "Japan",
      location: "Asia",
      grade: "A",
      fees: "$55 - $200",
      description:
        "Japan combines traditional culture with cutting-edge technology. Tokyo is known for its skyscrapers and fashion, while Kyoto offers serene temples and gardens. Mount Fuji, historic castles, and Japanese cuisine including sushi and ramen are major draws.",
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: "China",
      location: "Asia",
      grade: "A-",
      fees: "$40 - $160",
      description:
        "China boasts a rich cultural heritage with landmarks like the Great Wall, the Forbidden City, and the Terracotta Army. Modern cities like Shanghai and Beijing offer a blend of historical sites and contemporary attractions, while scenic areas like Guilin are perfect for nature lovers.",
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: "Thailand",
      location: "Asia",
      grade: "A",
      fees: "$30 - $120",
      description:
        "Thailand is known for its beautiful beaches, vibrant street markets, and rich cultural heritage. Bangkok offers bustling markets and temples, while Phuket and Krabi provide stunning coastal scenery. Thai cuisine is famous for its flavors and variety.",
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: "United Kingdom",
      location: "Europe",
      grade: "A",
      fees: "$50 - $200",
      description:
        "The United Kingdom features historical landmarks, cultural heritage, and vibrant cities. London, Edinburgh, and Liverpool are popular destinations offering iconic sites like Buckingham Palace, historic castles, and world-renowned museums.",
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: "Germany",
      location: "Europe",
      grade: "A",
      fees: "$45 - $180",
      description:
        "Germany is known for its rich history, cultural festivals, and picturesque landscapes. Berlin, Munich, and Hamburg are major cities with a mix of historical sites, modern architecture, and lively cultural scenes. The Bavarian Alps and Rhine River are also noteworthy attractions.",
    },
    {
      id: 10,
      imgSrc: img10,
      destTitle: "Australia",
      location: "Oceania",
      grade: "A",
      fees: "$60 - $250",
      description:
        "Australia offers diverse experiences from vibrant cities like Sydney and Melbourne to natural wonders such as the Great Barrier Reef and Uluru. The country is known for its unique wildlife, stunning beaches, and outdoor adventures.",
    },
    // {
    //   id: 11,
    //   imgSrc: "img11.jpg",
    //   destTitle: "Canada",
    //   location: "North America",
    //   grade: "A",
    //   fees: "$50 - $200",
    //   description:
    //     "Canada features breathtaking landscapes, including the Rocky Mountains and Niagara Falls. Cities like Toronto, Vancouver, and Montreal offer diverse cultural experiences, vibrant arts scenes, and outdoor activities.",
    // },
    // {
    //   id: 12,
    //   imgSrc: "img12.jpg",
    //   destTitle: "India",
    //   location: "Asia",
    //   grade: "B+",
    //   fees: "$30 - $120",
    //   description:
    //     "India is known for its rich cultural heritage, historic sites, and diverse landscapes. Key attractions include the Taj Mahal, Jaipur's palaces, and the backwaters of Kerala. Indian cuisine is varied and renowned for its bold flavors.",
    // },
    // {
    //   id: 13,
    //   imgSrc: "img13.jpg",
    //   destTitle: "Mexico",
    //   location: "North America",
    //   grade: "A-",
    //   fees: "$40 - $150",
    //   description:
    //     "Mexico offers a blend of ancient ruins, vibrant culture, and beautiful beaches. Highlights include the ruins of Chichen Itza, the lively city of Mexico City, and the beach resorts of Cancun and Playa del Carmen. Mexican cuisine is also a major attraction.",
    // },
    // {
    //   id: 14,
    //   imgSrc: "img14.jpg",
    //   destTitle: "South Korea",
    //   location: "Asia",
    //   grade: "A-",
    //   fees: "$40 - $150",
    //   description:
    //     "South Korea is known for its blend of modern cities and traditional culture. Seoul offers vibrant nightlife and historic palaces, while Jeju Island provides natural beauty and outdoor activities. Korean cuisine, including dishes like bibimbap and kimchi, is also popular.",
    // },
    // {
    //   id: 15,
    //   imgSrc: "img15.jpg",
    //   destTitle: "Singapore",
    //   location: "Asia",
    //   grade: "A",
    //   fees: "$50 - $180",
    //   description:
    //     "Singapore is a modern city-state known for its cleanliness, innovation, and multicultural atmosphere. Major attractions include Marina Bay Sands, Sentosa Island, and the Gardens by the Bay. Singaporean cuisine is diverse, reflecting its multicultural heritage.",
    // },
    // {
    //   id: 16,
    //   imgSrc: "img16.jpg",
    //   destTitle: "Netherlands",
    //   location: "Europe",
    //   grade: "A",
    //   fees: "$45 - $170",
    //   description:
    //     "The Netherlands is famous for its picturesque canals, historic cities, and vibrant culture. Amsterdam offers iconic canals, museums, and lively neighborhoods, while the tulip fields and windmills of the countryside are popular attractions.",
    // },
    // {
    //   id: 17,
    //   imgSrc: "img17.jpg",
    //   destTitle: "Greece",
    //   location: "Europe",
    //   grade: "A",
    //   fees: "$40 - $160",
    //   description:
    //     "Greece is known for its ancient history, stunning islands, and beautiful landscapes. Athens features historical sites like the Acropolis, while the islands of Santorini and Mykonos offer breathtaking views and Mediterranean charm. Greek cuisine, with its emphasis on fresh ingredients, is also a highlight.",
    // },
    // {
    //   id: 18,
    //   imgSrc: "img18.jpg",
    //   destTitle: "Turkey",
    //   location: "Asia/Europe",
    //   grade: "A-",
    //   fees: "$35 - $140",
    //   description:
    //     "Turkey straddles two continents and offers a unique blend of Eastern and Western cultures. Istanbul is known for its historic sites like the Hagia Sophia and Grand Bazaar, while regions like Cappadocia offer stunning landscapes and ancient cave dwellings.",
    // },
    // {
    //   id: 19,
    //   imgSrc: "img19.jpg",
    //   destTitle: "Brazil",
    //   location: "South America",
    //   grade: "B+",
    //   fees: "$40 - $150",
    //   description:
    //     "Brazil is known for its vibrant culture, stunning beaches, and natural wonders. Rio de Janeiro features the iconic Christ the Redeemer statue and lively Carnival, while the Amazon Rainforest offers unparalleled biodiversity and adventure.",
    // },
    // {
    //   id: 20,
    //   imgSrc: "img20.jpg",
    //   destTitle: "South Africa",
    //   location: "Africa",
    //   grade: "B+",
    //   fees: "$45 - $160",
    //   description:
    //     "South Africa offers diverse landscapes, including wildlife safaris, stunning coastlines, and vibrant cities. Cape Town is renowned for its natural beauty and cultural scene, while Kruger National Park provides opportunities to see the Big Five. South African cuisine is diverse and influenced by various cultures.",
    // },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, destTitle, description, location, grade, fees }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Main;
