import React from 'react'
import HeaderPages from './HeaderPages'
import Footer from './Footer'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import './Skillstech'
import Breadcrumb from './Breadcrumb';
import Skillstech from './Skillstech';
import Certificate from './Certificate';
const Skills = () => {
  return (
    <div>
        <header>
        <HeaderPages/>
      <div
        className='p-5 text-center setHeaderPrjct bg-image'>
          
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 text-uppercase'> <MDBIcon fas icon="code" className='text-white' /> | TECHNICAL SKILLS  </h1>
             </div>
          </div>
        </div>
      </div>
    </header>

    <MDBContainer>
      <Breadcrumb/>

    <section className=' setSection '>
        <div>
            <h2>Skills and technologies</h2>
            <p className='skills-p1'>
            In the following sections, I will provide a detailed overview of my technical skills, covering various aspects of programming, web development, frameworks, modeling methodologies and tools, database management, decision support tools, integrated development environments (IDEs), and operating systems.

            </p>
        </div>
    <MDBAccordion  borderless initialActive={1}>
      <MDBAccordionItem className='setWidthAccordion' collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Basic Programming</>}>
      I possess strong foundational skills in several programming languages including C, C++, Java, and C#. These languages form the core of my programming knowledge, allowing me to understand and implement efficient algorithms and develop robust software applications. My proficiency in these languages enables me to tackle a wide range of technical challenges and build solutions that are both scalable and maintainable.
      </MDBAccordionItem>
      <MDBAccordionItem className='setWidthAccordion' collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Web Development</>}>
      My web development skills encompass a comprehensive understanding of HTML5, CSS3, JavaScript, and PHP. I am adept at creating responsive and interactive web pages using HTML and CSS, and I leverage JavaScript to add dynamic behavior and enhance user experience. My knowledge of PHP allows me to develop server-side logic and manage back-end operations efficiently. These skills collectively enable me to build full-stack web applications that meet modern web standards.
      </MDBAccordionItem>
      <MDBAccordionItem className='setWidthAccordion' collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Frameworks</>}>
      I have hands-on experience with several key frameworks that streamline the development process and enhance application functionality. This includes Node.js and Express.js for building scalable server-side applications, React.js for developing sophisticated and responsive user interfaces, and Bootstrap for designing mobile-first, responsive web pages. My expertise in these frameworks helps me deliver high-quality applications with improved performance and user experience.
      </MDBAccordionItem>

      <MDBAccordionItem className='setWidthAccordion' collapseId={4} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Modeling Methodology and Design</>}>
      I am well-versed in modeling methodologies and design principles such as MERISE and UML (Unified Modeling Language). These methodologies guide me in the structured design and analysis of information systems, ensuring that they meet the required specifications and quality standards. UML, in particular, aids in visualizing system architecture and designing components that are both modular and reusable.
      </MDBAccordionItem>

      <MDBAccordionItem className='setWidthAccordion' collapseId={5} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Modeling Tools</>}>
      To complement my knowledge of modeling methodologies, I am proficient in using modeling tools like PowerAMC and Enterprise Architect. These tools assist in creating detailed diagrams and models that represent system architecture, workflows, and data structures. They are instrumental in planning and documenting the system design, facilitating better communication among stakeholders and ensuring a clear understanding of the project scope.
      </MDBAccordionItem>

      <MDBAccordionItem className='setWidthAccordion' collapseId={6} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Database Management System</>}>
      My skills in database management encompass working with various database systems including Oracle, Microsoft SQL Server, Microsoft Access, and MySQL. I have experience in designing, implementing, and managing databases to ensure data integrity, security, and efficient retrieval. These skills are crucial for developing applications that require robust data storage and management solutions.
      </MDBAccordionItem>

      <MDBAccordionItem className='setWidthAccordion' collapseId={7} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Decision Support Tools</>}>
      I am knowledgeable in using decision support tools such as Talend, Dataminer, and Oracle for data analysis, transformation, and visualization. These tools enable me to extract meaningful insights from large datasets, supporting informed decision-making processes. They are essential for projects that involve data integration, business intelligence, and predictive analytics.
      </MDBAccordionItem>

      <MDBAccordionItem className='setWidthAccordion' collapseId={8} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Integrated Development Environments (IDEs)</>}>
      To enhance my coding efficiency and productivity, I utilize various Integrated Development Environments (IDEs) including Visual Studio Code, Visual Studio 2019, and Eclipse. These environments provide powerful features like code completion, debugging, and version control integration, which streamline the development workflow and improve code quality.
      </MDBAccordionItem>

      <MDBAccordionItem className='setWidthAccordion' collapseId={9} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Operating Systems</>}>
      I am proficient in working with multiple operating systems, primarily Windows and Linux. This versatility allows me to develop and deploy applications across different platforms, ensuring compatibility and performance optimization. My experience with these operating systems also includes system administration tasks such as managing user permissions, configuring network settings, and maintaining system security.
      </MDBAccordionItem>
      
    </MDBAccordion>
      
    </section>
    
    <section className=' mb-5 mt-5 '  >
    <h3>Technologies</h3>
    <p className='skills-p1'>

    I specialize in developing robust applications using a variety of essential technologies. For front-end and back-end development, I leverage JavaScript extensively. It allows me to create flexible and powerful solutions that enhance user experience and application functionality. In database management, I am proficient in SQL, ensuring efficient data handling and optimization. This includes expertise in managing MSSQL, MySQL, and Oracle databases, ensuring reliable data solutions across different platforms. Additionally, I am skilled in version control, testing frameworks, and deployment tools, enabling me to deliver high-quality, scalable applications tailored to meet specific project requirements and industry standards.    </p>
    <Skillstech/>

      </section>

      <section className=' mb-5 mt-5 '  >
    <h3>Cetification</h3>
    <p className='skills-p1'>
    
I hold certifications in Front-End Development with React and Back-End Development with Node.js and Express from Coursera. These certifications have equipped me with comprehensive skills in building dynamic and responsive web applications using React, mastering component-based architecture, state management, and React Router for single-page applications. Additionally, I have developed robust proficiency in server-side development with Node.js and Express, enabling me to build RESTful APIs, manage databases with MongoDB, and implement authentication and authorization mechanisms. These credentials reflect my ability to develop and maintain full-stack applications, ensuring seamless integration and optimal performance.
    </p>
<div className=' setmaxwith'>
    <Certificate/>
    </div>
      </section>


    </MDBContainer>

        <Footer/>
    </div>
  )
}

export default Skills