import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";
import Person7 from "../images/team/7.png";
import Person8 from "../images/team/8.png";
import Person9 from "../images/team/9.png";
// 363 * 447

{/* 
  7 -> 1
  1 -> 7
  5 -> 6
  6 -> 5

*/}
function Team() {
  const teamPpl = [
    { img: Person1, name: "James Mitchell", job: "Business Owner" },
    { img: Person2, name: "Benjamin Parker", job: "Manager" },
    { img: Person3, name: "Sophia Roberts", job: "Photographer" },
    { img: Person4, name: "Emma Taylor", job: "Maintenance Technician" },
    { img: Person5, name: "Olivia Clark", job: "Accounting Clerk" },
    { img: Person6, name: "Ava Foster", job: "Marketing Specialist" },
    { img: Person7, name: "William Turner", job: "Maintenance Technician" },
    { img: Person8, name: "Daniel Harris", job: "Maintenance Technician" },
    { img: Person9, name: "Mia Johnson", job: "Vehicle Inspector" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+32 345 67 89 92</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
