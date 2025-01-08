import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    image: "/images/clients/client1.jpg",
    name: "Amit Kumar",
    designation: "Web Developer",
    feedbackText:
      "I had the pleasure of collaborating with Azure Rift for our website. Their attention to detail and innovation is unmatched. The team was extremely responsive, and the result was beyond expectations. Highly recommended for anyone looking to enhance their web presence.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client2.jpg",
    name: "Priya Patel",
    designation: "Founder & CEO",
    feedbackText:
      "Azure Rift's creative expertise helped our startup stand out. Their CGI work was exceptional and gave us a fresh identity in the market. If you want a team that’s passionate about pushing creative boundaries, Azure Rift is the way to go.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client3.jpg",
    name: "Ravi Sharma",
    designation: "UI/UX Designer",
    feedbackText:
      "Working with Azure Rift was an incredible experience. Their team not only understood our vision but also brought in their own unique perspectives. They helped redesign our platform, giving it a sleek and modern look. The results have been amazing for user engagement.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client4.jpg",
    name: "Meera Joshi",
    designation: "ReactJS Developer",
    feedbackText:
      "I’ve worked with many teams, but none like Azure Rift. Their approach to web development is top-notch. The way they integrated creative CGI elements into our website was truly revolutionary. It’s been a game-changer for our business.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client5.jpg",
    name: "Sunil Reddy",
    designation: "UI/UX Designer",
    feedbackText:
      "Azure Rift transformed our digital presence with their innovative designs. Their team took the time to understand our needs and delivered solutions that were both creative and functional. If you're looking for cutting-edge design and development, this is the team to work with.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client6.jpg",
    name: "Kiran Rao",
    designation: "SEO Developer",
    feedbackText:
      "Working with Azure Rift was an absolute pleasure. Their attention to detail and creativity in all aspects of web development was evident from the start. We saw a noticeable improvement in our website's performance, thanks to their excellent work.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client7.jpg",
    name: "Rajesh Gupta",
    designation: "UI/UX Designer",
    feedbackText:
      "We were looking for a partner who could help us bring our vision to life, and Azure Rift did exactly that. Their ability to combine innovative CGI with functional design exceeded our expectations. We're thrilled with the final result.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client8.jpg",
    name: "Neha Singh",
    designation: "PHP Developer",
    feedbackText:
      "Azure Rift’s team is a perfect blend of creativity and technical expertise. Their innovative CGI work and web development services brought our startup the attention it deserved. They are the best in the business!",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client9.jpg",
    name: "Vinay Sharma",
    designation: "Founder & CEO",
    feedbackText:
      "Azure Rift’s team was a pleasure to work with. They understood our needs and delivered creative, efficient, and functional solutions. We’ve seen remarkable improvements in our user engagement since working with them.",
    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
];

const TestimonialsContent = () => {
  return (
    <>
      <section className="client-area inner-client-page ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {testimonialsData &&
              testimonialsData.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={70}
                        height={70}
                      />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </div>
              ))}

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsContent;
