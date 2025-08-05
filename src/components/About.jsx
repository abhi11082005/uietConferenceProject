import { Link, NavLink } from "react-router-dom";
import React from "react";
export default function About() {
  return (
    <div className="mx-auto w-full max-w-7xl mt-5">
      <div className="bg-white py-10  text-center text-black border-b shadow-sm rounded-lg">
        {/* Section: About the Conference */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            About the Conference
          </h2>
        
        <p className="max-w-4xl mx-auto text-justify leading-7">
          <p>
            The{" "}
            <strong>
              International Conference on Recent Advances in Emerging Computing
              and Communication Technologies for a Sustainable Future
              (ICRAECCTSF 2026)
            </strong>{" "}
            is a distinguished global forum dedicated to advancing research and
            innovation at the intersection of cutting-edge computing,
            communication technologies, and sustainability.
          </p>

          <p class="mt-4">
            Scheduled for{" "}
            <strong>
              11<sup>th</sup>–13<sup>th</sup> April 2026
            </strong>
            , this international conference aims to foster interdisciplinary
            collaboration to address urgent environmental, economic, and social
            challenges through sustainable technological solutions.
          </p>

          <p class="mt-4">
            In an era marked by rapid digital transformation and environmental
            concerns, the role of emerging computing and communication
            technologies in shaping a resilient and sustainable future is more
            critical than ever. <strong>ICRAECCTSF 2026</strong> provides a
            platform for researchers, practitioners, industry leaders, and
            policymakers to share breakthrough ideas, promote green technology
            practices, and explore sustainable frameworks that minimize
            ecological footprints while maximizing societal benefits.
          </p>
        </p>
      </div>

      {/* Section: Conference Objectives */}
      <div className="bg-white py-10  text-center flex flex-col items-center text-black border-b shadow-sm rounded-lg mt-6">
        <section className="bg-white rounded-lg px-8 py-6 text-gray-900 max-w-5xl mx-auto my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Conference Objectives
          </h2>
          <ul className="list-disc list-inside space-y-2 text-justify">
            <li>
              To catalyze innovation in computing and communication technologies
              that prioritize sustainability and environmental stewardship.
            </li>
            <li>
              To promote interdisciplinary research and collaboration that
              integrates sustainability principles into technological
              development.
            </li>
            <li>
              To highlight emerging solutions that support sustainable
              urbanization, resource efficiency, and climate resilience.
            </li>
            <li>
              To encourage knowledge exchange between academia, industry,
              government, and civil society for sustainable digital
              transformation.
            </li>
          </ul>
        </section>
      </div>

      <div className="bg-white py-10  text-center flex flex-col items-center text-black border-b shadow-sm rounded-lg mt-6">
        {/* Section: Key Themes */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Key Themes</h2>
        <ul className="list-disc list-inside text-justify space-y-2">
          <li>Sustainable Computing and Green ICT Innovations</li>
          <li>Energy-Efficient and Low-Carbon Communication Networks</li>
          <li>AI and Machine Learning for Environmental Monitoring and Management</li>
          <li>Internet of Things (IoT) for Smart, Sustainable Cities</li>
          <li>Cloud and Edge Computing with Reduced Environmental Impact</li>
          <li>Cybersecurity and Privacy in Sustainable Systems</li>
          <li>Blockchain for Transparent and Sustainable Supply Chains</li>
          <li>Big Data Analytics for Climate Change and Sustainability</li>
          <li>Human-Centered Computing for Inclusive and Equitable Technologies</li>
          <li>Intelligent Transportation Systems Supporting Carbon Reduction</li>
          <li>Technologies Enabling Achievement of United Nations Sustainable Development Goals (SDGs)</li>
        </ul>
      </section>
      </div>

      <div className="bg-white py-10  text-center flex flex-col items-center text-black border-b shadow-sm rounded-lg mt-6">
        {/* Section: Key Themes */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Who Should Participate?</h2>
        <ul className="list-disc list-inside space-y-2 justify-center text-justify">
          <li>Researchers and Academicians committed to sustainable technology</li>
          <li>Industry Experts driving green innovation</li>
          <li>Environmentalists leveraging technology for conservation</li>
          <li>Students and Early Career Researchers passionate about Sustainability</li>
        </ul>
      </section>
      </div>
    </div>

    

  );
}
