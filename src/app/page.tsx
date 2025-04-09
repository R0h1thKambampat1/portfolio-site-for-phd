import Link from "next/link";
import EducationCard from "@/components/EducationCard";
// import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ResearchInterestCard from "@/components/ResearchInterestsCard";

export default function Home() {
  return (
    <main className="space-y-16">
      {/* Bio Section */}
      <section className="text-center mt-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Hi, I&rsquo;m Rohith Kambampati</h1>
        <p className="text-xl text-gray-600 mt-4">I have a Master&rsquo;s in Electronics and Electrical Engineering, and a Bachelor&rsquo;s in Electronics and Communication engienering from University of Glasgow and Shiv Nadar University respectively. My academic journey has deepened my passion for digital signal processing, communication theory, machine learning and information theory. With experience in full-stack development, embedded systems, and microcontroller programming, I have worked on a variety of projects that combinemy interests. I am particularly interested in pursuing research in Signal Processing, next gen communication technologies, Information Theory. My goal is to leverage my diverse skill set to contribute to cutting-edge research in communication systems and signal processing.</p>
        <Link href="/#contact" className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-500">
          Get in Touch
        </Link>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
        <div className="mt-6">
          <EducationCard university="University of Glasgow, UK" degree="MSc in Electronics and Electrical Engineering" courses={["Digital Signal Processing", "Navigation Systems", "Real-time Embedded Systems", "Micro and Nano technology", "Biosensors and diagnostics", "Power Electronics and Drives", "Control"]} thesis="A web application to predict heart disease risk using Machine Learning" advisor="Dr. Martin Lavery" year="2022 - 2023" />
        </div>
        <div className="mt-6">
          <EducationCard university="Shiv Nadar University, India" degree="B.Tech in Electronics and communication engineering" courses={["Digital Signal Processing", "Digital Communication", "Communication Engineering", "Graph Signal Processing", "Information theory and coding", "Applied Machine Learning", "Machine Learning through R", "Micorwave engineering", "VLSI Technology and Design", "Embedded Systems Hardware", "Design of Analog CMOS circuits", "Data Structures and Algorithms"]} thesis="Physical layer security for Cooperative systems: Relay Selection using GSP" advisor="Prof. Vijay Kumar Chakka" year="2017 - 2021" />
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
        <div className="space-y-6 mt-6">
          <ProjectCard title="ResearchDigest web application" description="Given that I am on the path to pursue my PhD studies, where reading and analyzing a large volume of research articles is essential, I wanted to build a tool to enhance my efficiency. The abstract often plays a crucial role in determining whether a paper is worth exploring further. To streamline this process, I envisioned a solution that would collect abstracts and corresponding links to research papers in one centralized place. This would allow me to quickly scan through multiple abstracts and filter out the papers most relevant to my interests. ResearchDigest was conceived to address this very need." link="https://github.com/R0h1thKambampat1/research-digest-web-app" linkToLiveSite="https://research-digest-web-app.onrender.com/" />
          <ProjectCard title="Track-Record" description="This project was part of the course Real-time Embedded systems I completed during my masters studies. Track-Record is a face tracking system built on the Raspberry Pi 3B platform, using a Pi Camera Module and servo motors for real-time face detection and tracking. A GUI is also implemented which communicates via a server sending commands to the Raspberry Pi." link="https://github.com/oscell/Track-Record" />
          <ProjectCard title="Physical layer security for Cooperative systems: Relay Selection using GSP" description="As part of this project, I investigated the application of Graph Signal Processing (GSP) within cooperative relay networks. I explored how GSP techniques could be leveraged to improve physical layer security, particularly in scenarios involving potential eavesdroppers." link="https://github.com/R0h1thKambampat1/Physical-layer-security" />
          <ProjectCard title="A web application to predict heart disease risk prediction using Machine Learning" description="I focused on the statistical aspects of machine learning, exploring which algorithms are best suited for specific conditions and dataset characteristics, particularly in practical applications like heart disease risk prediction. Through this project, I compared the performance of various machine learning models under different scenarios to determine the most suitable algorithms based on the use case. As part of my project, I developed a full-stack application using React for the frontend and Flask for the backend, integrating machine learning models built in Python." link="https://github.com/R0h1thKambampat1/heart-disease-risk-prediction-using-ml" />
          <ProjectCard title="Physical layer security using pilot contamination detection technique" description="Developed a Python-based framework to detect pilot contamination attacks in multi-user MIMO systems, a key security threat at the physical layer.	Implemented a statistical detection algorithm using signal correlation analysis to identify malicious pilot sequences in simulated 5G environments." link="https://github.com/R0h1thKambampat1/Physical-layer-security-using-pilot-contamination-detection" />
          <ProjectCard title="Blind Channel estimation techniques in wireless systems" description="Designed and implemented a suite of blind channel estimation algorithms in Python to recover channel state information (CSI) without pilot signals, targeting MIMO-based wireless systems.Explored MUSIC algorithm, Deep neural networks using TensorFlow, Bussgang algorithm, constant modulus algorithm, SVD for blind channel estimation." link="https://github.com/R0h1thKambampat1/Universal-image-quality-index" />
          <ProjectCard title="Deep learning model for channel estimation in cell free MIMO " description="Developed a deep learning model using TensorFlow to estimate channel state information (CSI) in a simulated cell-free MIMO network. Generated synthetic complex-valued pilot and channel datasets and trained a fully connected neural network for accurate CSI prediction under varying SNR conditions." link="https://github.com/R0h1thKambampat1/deep-learning-based-channel-estimation-for-cell-free-networks" />
          <ProjectCard title="Universal Image Quality Index" description="This project was part of the course Digital Signal Processing I completed during my undergraduate studies. It involves a MATLAB implementation based on a research paper with the same title." link="https://github.com/R0h1thKambampat1/Universal-image-quality-index" />
        </div>
      </section>
      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Programming Languages and frameworks</h3>
        <SkillCard skills={["Python", "MATLAB", "Simulink", "Verilog", "R", "C", "C++", "Java", "JavaScript", "TypeScript"]}></SkillCard>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Full stack technologies</h3>
        <SkillCard skills={["Angular", "React", "Next", "Django", "Flask", "Springboot", "Node", "Express", "MongoDB"]}></SkillCard>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Simulation and design tools</h3>
        <SkillCard skills={["LT Spice", "Cadence", "Ki-Cad"]}></SkillCard>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Others</h3>
        <SkillCard skills={["Visual Studio Code", "Jupter Notebook"]}></SkillCard>
      </section>
      {/* Research Interests Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Research Interests</h2>
        <ResearchInterestCard interests={["Information Theory", "Graph Signal Processing", "Communication Systems", "Semi and Blind Channel Estimation", "Delay Doppler communications", "6G and beyond Technologies", "Semantic Communications", "Machine Learning", "AGI"]} />
      </section>

      {/* Contact & Links Section */}
      <section id="contact" className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Contact & Links</h2>
        <div className="mt-4">
          <Link href="https://github.com/R0h1thKambampat1" className="text-blue-600 hover:underline mr-6">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/rohith-kambampati-787431149/" className="text-blue-600 hover:underline">
            LinkedIn
          </Link>
        </div>
      </section>
    </main>
  );
}
