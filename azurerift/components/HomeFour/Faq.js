import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../public/images/faq-img.png";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is AzureRift all about?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        AzureRift is a creative studio that combines the worlds of animation, CGI, AI, and web development. We create exceptional digital experiences by merging storytelling with cutting-edge technology. Whether through animation, interactive web applications, or AI-powered solutions, we bring your ideas to life in new and exciting ways.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How did AzureRift get started?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        AzureRift was founded by a diverse team of animators, developers, and tech enthusiasts. Our journey began with a shared passion for blending creativity with technology. We’ve grown from a small team of dreamers into a forward-thinking studio that integrates animation, CGI, AI, and web development into every project we touch.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does AI fit into your animation and web development work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        AI plays a key role at AzureRift in streamlining workflows, enhancing creative processes, and offering innovative solutions. From AI-driven animation tools to building smart web applications, we use AI to automate repetitive tasks, analyze user behavior, and create dynamic and personalized user experiences.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What technologies do you use for web development at AzureRift?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        At AzureRift, we use a range of modern web technologies including React.js, Next.js, and Node.js to build scalable, interactive, and high-performance web applications. We also integrate AI and machine learning models to provide customized solutions for our clients, ensuring that each project is both cutting-edge and future-proof.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does AzureRift combine creativity with technology?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Creativity and technology go hand in hand at AzureRift. We use technology not just to improve efficiency, but also to enhance our creative potential. Whether it’s using AI for animation, developing web apps with innovative features, or applying the latest CGI techniques, we ensure that every project we deliver is both artistically inspiring and technically advanced.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I collaborate with AzureRift?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Whether you're a storyteller, a business looking to leverage AI, or a developer seeking creative collaboration, we'd love to work with you. Reach out to us to discuss how we can bring your project to life through the fusion of animation, AI, web development, and innovative design.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={360} height={465} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
