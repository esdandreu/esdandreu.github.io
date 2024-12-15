import React from "react";
import web_img from "./images/project-web.png";
import WakePi_img from "./images/WakePi.jpg";
import KinectRobot_img from "./images/KinectRobot.jpg";
import eogu_img from "./images/Eogu.jpg";
import DBF_img from "./images/DBF.jpg";

const PROJECTS = [
  {
    id: "KinectRobot",
    title: "Kinect Color Guided Robot",
    project_url:
      "https://es.mathworks.com/matlabcentral/fileexchange/66843-kinect-color-guided-robot-upv?s_tid=prof_contriblnk",
    period: "Autumn 2017",
    image: KinectRobot_img,
    highlights: "Matlab, Kinect, C, Robotics",
    description: () => (
      <div>
        This is a project we developed in a UPV class in collaboration with two
        other classmates. In this project we use a kinect camera to guide a
        robot (a little car) towards a destination without any sensor integrated
        in the robot. A color cased tracking is used to distinguish between
        robot and destination in the camera. Moreover, the kinect camera allows
        us to guide the robot in a straight line towards the destination without
        placing the camera perpendicular to the ground due to its depth sensor.
        The project consists then of a Kinect camera connected to a computer.
        This computer is running a Matlab code that sends the moving
        instructions to the robot's microcontroller, which drives the robot's
        motors according to that instructions. The Matlab code is integrated
        with a GUI that allows you to select the colors to track the robot and
        the destination.
        <br />
        <br />
        The color tracking functions were developed from scratch using Matlab's
        computer vision library. At that time the public color tracking methods
        just worked with pure red, green and blue because they just decomposed
        the image RGB matrix. My code works with any color and adapts constantly
        so it can deal with small light changes. A
        <a
          href="https://upvedues-my.sharepoint.com/:v:/g/personal/angibo2_upv_edu_es/EduN7iEbUpZFhQ8ytkGTC4ABUTrqZ5FBZEJmz8WH_K2VBQ?e=3gzfDa"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;demonstration video&nbsp;
        </a>
        was recorded at the end of the course, and the source code can be found
        <a
          href="https://es.mathworks.com/matlabcentral/fileexchange/66843-kinect-color-guided-robot-upv?s_tid=prof_contriblnk"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;in the MathWorks Forum.
        </a>
      </div>
    ),
  },
  {
    id: "WakePi",
    title: "WakePi",
    project_url: "https://github.com/esdandreu/WakePi",
    period: "Summer 2018",
    image: WakePi_img,
    highlights: "Python, Telegram bot UI, Raspberry Pi, Linux",
    description: () => (
      <div>
        Raspberry Pi alarm clock that wakes you up in an irregular schedule
        without setting an alarm. Integrated with your calendar, it triggers
        with your first day event with the spotify music of your choice,
        selected through the user interface built in a telegram bot. The user
        must have spotify premium and it also works as a music box and a spotify
        connected speaker. Furthermore, it can reproduce youtube videos as
        music.
        <br />
        <br />I made this because I was tired of useless alarm clocks with radio
        that did not adapt completely to my needs. I have an irregular schedule
        so I can't set the same alarms every day, neither week, but I have a
        calendar with my events. Every night I checked the tomorrow's first
        event to set my alarm so that's exactly what I automatized with this
        project. The alarm clock is synchronized with the calendar and it sets
        the alarms automatically. I like to wake up with music, but not any
        music. I like to choose what music is better for me to wake up.
        Therefore, I connected the alarm clock to spotify, where one can select
        the playlist, song or album to use for waking up. Moreover, I coded a
        growing ring volume with time so you wake up more naturally.
        Customization was the main motivation to do this project so this volume
        curve and limits are totally configurable by users without needing to
        know how to read the code as it's all in the telegram bot UI. Why
        telegram as user interface? <em>Keep it stupid simple</em>. The code and
        configuration instructions are
        <a
          href="https://github.com/esdandreu/WakePi"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;in my github account.
        </a>
      </div>
    ),
  },
  {
    id: "EOGU",
    title: "EOGU",
    project_url: "https://www.jamesdysonaward.org/2018/project/eogu/",
    period: "Autum 2018 - Present",
    image: eogu_img,
    highlights: "3D Printing, Fusion 360, Entrepreneurship, CFD",
    description: () => (
      <div>
        Entrepreneurship project developed with the EOGU team. The project
        consisted in developing a renewable energy generator for city buildings:
        The Eolic Panel.
        <br />
        <br />
        The project includes the technical aspects like the design, simulation
        and prototyping of the invention, as well as the business model, market
        research, customer validation, financials estimations, etc. This project
        has received several design and business awards, like the
        <a
          href="https://www.jamesdysonaward.org/2018/project/eogu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;James Dyson Award&nbsp;
        </a>
        and the
        <a
          href="http://www.upv.es/noticias-upv/noticia-10449-climatelaunchp-es.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;Climate Launchpad
        </a>
        . The project entered the
        <a
          href="https://www.climate-kic.org/programmes/entrepreneurship/accelerator/"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;Climate-KIC Accelerator&nbsp;
        </a>{" "}
        Stage 1 in May 2019, but it didn't continued to the Stage 2 because the
        team members were not able to dedicate the required amount of time to
        the project in order to form the company.
      </div>
    ),
  },
  {
    id: "DBF",
    title: "Design, Build and Fly",
    project_url:
      "http://www.amsterdamuas.com/binaries/content/assets/subsites/aviation/international-students/design-build--fly-folder.pdf",
    period: "Spring 2019",
    image: DBF_img,
    highlights: "Aviation, Fusion 360, XFLR 5, Merlin Flight Simulator",
    description: () => (
      <div>
        Thesis project developed during my exchange experience in Amsterdam
        University of Applied Sciences. The programme followed was the Design
        Build and Fly minor.
        <h4>Thesis Abstract</h4>
        Five students with different backgrounds have completed the Design,
        Build and Fly minor in the Aviation Academy of the Amsterdam University
        of Applied Sciences. The main goal of this minor is to give the students
        a good practical approach in aircraft design and at the end of it the
        students have been able to design, build and fly fixed wing, one engine
        Unmanned Aerial Vehicle that is capable of flying a predetermined route
        and to drop a small payload. This project includes the concept design,
        detail design, production plan and evaluation of the project itself
        considering the flight results.
        <br />
        <br />A
        <a
          href="https://upvedues-my.sharepoint.com/:v:/g/personal/angibo2_upv_edu_es/ERTAxm8uSGNHtzigICZuUT4BezI9h3AdpQkTLp61r1DIeg?e=HOfjdk"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;compilation of the flight videos&nbsp;
        </a>
        was produced after the minor closing. One can find also the
        <a
          href="https://upvedues-my.sharepoint.com/:b:/g/personal/angibo2_upv_edu_es/EaIs0Zfwg5pIozfH8EYgbEkBvUM96pAoXmKpCdywH2hJMg?e=bdQ1Ht"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;thesis documentation.
        </a>
      </div>
    ),
  },
  {
    id: "project-web",
    title: "React Redux portfolio web",
    project_url: "http://www.esdandreu.com",
    period: "July 2019",
    image: web_img,
    highlights: "Javascript, HTML 5, CSS 3, React, Redux, Fractal",
    description: () => (
      <div>
        Portfolio web app developed with React Redux, using a Fractal file
        architecture, baseline from the create-react-App repository. The
        development of this web took two weeks. The first week was dedicated to
        learning web development through two Udemy courses:
        <ul>
          <li>
            <a
              href="https://www.udemy.com/realiza-tu-primer-pagina-web-hmtl5-css-responsive/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Develop your first web page (HTML5, CSS & responsive)&nbsp;
            </a>
            <a
              href="https://1drv.ms/u/s!AqZvnCxLmXx9ge8EBGN5oUaHXRJwGQ"
              rel="noopener noreferrer"
              target="_blank"
            >
              (Certificate)
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/react-js-and-redux-mastering-web-apps/"
              rel="noopener noreferrer"
              target="_blank"
            >
              React JS Web Development - The Essentials Bootcamp&nbsp;
            </a>
            <a
              href="https://1drv.ms/u/s!AqZvnCxLmXx9ge8D3fGJN6KdflOa1w"
              rel="noopener noreferrer"
              target="_blank"
            >
              (Certificate)
            </a>
          </li>
        </ul>
        During the second week I developed the source code of this web page,
        which can be found
        <a
          href="https://github.com/esdandreu/react-personal-web"
          rel="noopener noreferrer"
          target="_blank"
        >
          &nbsp;in my github account.
        </a>
      </div>
    ),
  },
];

export default PROJECTS;
