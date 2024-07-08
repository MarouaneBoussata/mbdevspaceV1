import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Terminal.css'
import TerminalHeader from './TerminalHeader';

const Terminaly = () => {


    const Navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to my terminal V1.06! Explore my skills, projects, experience, and contact information through simple commands.");
const [art,setArt]=useState([
  <div class="box">
    ███╗   ███╗██████╗  ██████╗ <br/>
    ████╗ ████║██╔══██╗██╔════╝ <br/>
    ██╔████╔██║██████╔╝███████╗ <br/>
    ██║╚██╔╝██║██╔══██╗██╔═══██╗<br/>
    ██║ ╚═╝ ██║██████╔╝╚██████╔╝<br/>
    ╚═╝     ╚═╝╚═════╝  ╚═════╝ 
          </div>
        
])
const [guide, setGuide] = useState([

<div>
<p>tape 'help' to get started with commande lines</p>
<p>tape 'Exit' to quit the terminal</p>
</div>
  
]);
const setPrompt = useState([
  <span className='setPrompt'>@mb6devspace :~$</span>
])
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text.toLowerCase();
        
        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;
                case 'restart':
                  window.location.reload();
                  break;
        
                case 'help':
                  response = [
                    <div>
                      <p>Know more about me by the commande lines above :</p>
                      <ul>
                        <li>"about" : Learn more about my passion, background, and skills. </li>
                        <li>"education" : explore my academic journey</li>
                        <li>"skills" : Here are the primary technologies I use. </li>
                        <li>"project" : Explore a selection of projects I've developed.</li>
                        <li>"contact" : Get in touch with me.</li>
                        <li>"clear" : clear the console screen.</li>
                        <li>"restart" : restart the terminal</li>
                        
                          
                            <li>"date" :show date of today.</li>
                            <li>Other things are coming ...</li>
                          



                        
                        <li>"exit" :quit the terminal and go back to the home.</li>
                        
                      </ul>
                    </div>
                  ];
                  break;
                  case 'about':
                     response = [
                      <div>
                        <p className='text-success'>commande executed = "about"</p>
                        <p>Learn more about my journey, experiences, and expertise.</p>
                        <p>=======================================================================================================</p>
                      <p className='w-75'>
                      I am a talented individual in my early twenties. My name is Marouane, and I am a junior software developer and database administrator with expertise in Node.js, particularly React for the frontend and Express for the backend, as well as Oracle and Microsoft SQL Server.
                      </p>
                      </div>
                    ]
                    break;

                    case 'education':
                      response = [
                       <div>
                         <p className='text-success'>commande executed = "education"</p>
                         <p>Discover my educational background and achievements.</p>
                         <p>=======================================================================================================</p>
                       <p className='w-50'>
                          <ul>
                            <li>
                          2022-2023 : Bachelor degree in the faculty of science - Morocco 
                            </li>
                            <li>
                          2020-2022 : University diploma of technology in High school of technology - Morocco 
                            </li>
                          </ul>
                       </p>
                       </div>
                     ]
                     break;

                     case 'skills':
                      response = [
                       <div>
                         <p className='text-success'>commande executed = "skills"</p>
                         <p>
                         Explore the skills I've acquired and honed over the years.</p>
                         <p>=======================================================================================================</p>
                       <p className='w-50'>
                          <ul>
                            <li>Node.js</li>
                            <li>React.js</li>
                            <li>mongoDB</li>
                            <li>Express</li>
                            <li>C++</li>
                            <li>Java</li>
                            <li>docker</li>
                            <li>Talend</li>
                            <li>MySQL</li>
                            <li>Oracle</li>
                            <li>Microsoft SQL server</li>
                            <li>WordPress</li>
                            <li>Adobe Illustrator</li>
                            <li>Tailwinds</li>
                            <li>Bootstrap</li>
                          </ul>
                       </p>
                       </div>
                     ]
                     break;
                     case 'project':
                      response = [
                       <div>
                         <p className='text-success'>commande executed = "project"</p>
                         <p>
                         Discover the projects I've undertaken and their impact.</p>
                         <p>=======================================================================================================</p>
                       <p className='w-75'>
                          <ul>
                            <li>
                        <p className=' fw-bold'>Final year project of the fundamental bachelor's degree. <span className='fw-light'>(03/2023 - 06/2023)</span> </p>
                        <p>Design and implement an electronic invoice signature application and supplier management based on React.js, Express (Node.js), and REST API for backend services and data integration.</p>
                            </li>
                            <li>
                        <p className=' fw-bold'>Frontend DEVELOPER  <span className='fw-light'>( 02/2022 - 06/2022)</span> </p>
                        <p>Design and implement a national residency exam management application using Merize, UML in analysis and modeling, React.js in the front end, and REST API for backend services and data integration.</p>
                            </li>
                            <li>
                        <p className=' fw-bold'>Frontend DEVELOPER  <span className='fw-light'>( 03/2022 - 05/2022)</span> </p>
                        <p>Realization of an application for the management of a residency competition using React.js, Laravel, and REST API for backend services and data handling.</p>
                            </li>
                            <li>
                        <p className=' fw-bold'>WEB DEVELOPER   <span className='fw-light'>( 09/2020 - 08/2021)</span> </p>
                        <p>	Creating a website using the Bootstrap Framework. </p>
                          <p>	Converting a website from the Bootstrap Framework to the WordPress CMS.</p>
                            </li>

                          </ul>
                       </p>
                       </div>
                     ]
                     break;

          

            case 'clear':
                response = null;
                setWelcomeMessage("");
                setArt("")
                setGuide("")
                break;

            case 'exit':
                response = Navigate('/');
                break;
                case 'contact':
                  response = [
                   <div>
                     <p className='text-success'>commande executed = "contact"</p>
                     <p>
                     Reach out to me for collaborations or inquiries.</p>
                     <p>=======================================================================================================</p>
                   <p className='w-75'>
                      <ul>
                        <li className=''>
                     <span className='fw-bold'> Email </span> :<a className='' href='mailto:boussata80@gmail.com'> boussata80@gmail.com </a>
                        </li>
                        <li className=''>
                     <span className='fw-bold'> Phone number </span> : +4479475 44657
                        </li>
                        <li className=''>
                        <span className='fw-bold'> Linkedin </span> : <a href='https://www.linkedin.com/in/marouaneboussata' target='_blank'>marouaneboussata</a>
                        </li>
                        <li className=''>
                        <span className='fw-bold'> website </span> : <a href='https://mb6devops.netlify.app/' target='_blank'>MB6 DEVSPACE</a>
                        </li>
                        <li className=''>
                        <span className='fw-bold text-white'> Contact Me via form </span> : <a href='https://mb6devops.netlify.app/contactMe' className=' text' target='_blank'>Contact</a>
                        </li>
                    
                        
                      </ul>
                   </p>
                   </div>
                 ]
                 break;

            default:
                response = [
                  <p className=' text-danger'>Unknown command : {command}</p>
                ]
                break;
                
        }

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
        
    }

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        }
    }, []);
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          const input = event.target.value.trim();
          if (input) {
              TerminalService.emit('command', input);
          }
          event.target.value = '';
      }
    };

    return (
     
        <div className='setTerminalContainer '>
          <TerminalHeader/>
            <p>{welcomeMessage}</p>
            <div>{art}</div>
            <p>{guide}</p>
            <Terminal type='text' onKeyUp={handleKeyPress} className='setheightTerminal'  prompt={setPrompt}>
            <input type="text" className="terminal-input" onKeyUp={handleKeyPress} />
            </Terminal>
        </div>
     
    );
    
}

export default Terminaly;
