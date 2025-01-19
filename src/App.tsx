//import * as React from 'react';
import { SocialIcon } from './components/SocialIcon';
import { ContactItem } from './components/ContactItem';
import { ActionIcon } from './components/ActionIcon';

// * SOCIAL MEDIA ICONS
import facebook from './assets/cib-facebook.svg';
import instagram from './assets/cib-instagram.svg';
import linkedin from './assets/cib-linkedin.svg';
import tiktok from './assets/cib-tiktok.svg';
import dribble from './assets/cib-dribbble.svg';
import github from './assets/cib-github.svg';
import discord from './assets/cib-discord.svg';
import reddit from './assets/cib-reddit.svg';
import whatsapp from './assets/cib-whatsapp.svg';
import youtube from './assets/cib-youtube.svg';
const socialIcons = [
  { src: facebook, alt: "Social media icon 1" },
  { src: instagram, alt: "Social media icon 2" },
  { src: linkedin, alt: "Social media icon 3" },
  { src: tiktok, alt: "Social media icon 4" },
  { src: dribble, alt: "Social media icon 5" },
  { src: github, alt: "Social media icon 6" },
  { src: discord, alt: "Social media icon 7" },
  { src: reddit, alt: "Social media icon 8" },
  { src: whatsapp, alt: "Social media icon 9" },
  { src: youtube, alt: "Social media icon 10" }
];

// * CONTACT ITEMS ICONS
import phone from './assets/basil-phone-solid.svg';
import email from './assets/basil-at-sign-solid.svg';
import location from './assets/basil-location-solid.svg';
const contactItems = [
  { iconSrc: phone, text: "Number" },
  { iconSrc: email, text: "Email" },
  { iconSrc: location, text: "Address" }
];

// * ACTION MENU ICONS
import menu from './assets/basil-apps-solid.svg';
import setting from './assets/basil-settings-adjust-solid.svg';
import link from './assets/basil-arrow-right-outline.svg';
const actionIcons = [
  { src: link, alt: "Action 1", linkTo: "/dashboard" },
  { src: setting, alt: "Action 2" },
  { src: menu, alt: "Action 3" }
];
import userIcon from './assets/basil-user-solid.svg';


import './App.css'
function App() {
  return (
    <main className="flex justify-between items-center overflow-hidden flex-wrap gap-10 m-20 p-20 bg-white rounded-[40px] max-md:px-5">
      <article className="flex flex-col self-stretch my-auto min-w-[240px] w-[588px] max-md:max-w-full">
        <div className="flex flex-col justify-center max-w-full text-black w-[306px]">
          <div className="text-6xl font-bold max-md:text-4xl">Full Name</div>
          <div className="mt-5 text-5xl font-semibold max-md:text-4xl">Title</div>
        </div>
        <div className="flex flex-col justify-center mt-64 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center self-start text-4xl text-black whitespace-nowrap">
            {contactItems.map((item, index) => (
              <div key={index} className={index > 0 ? "mt-5" : ""}>
                <ContactItem iconSrc={item.iconSrc} text={item.text} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 items-center mt-20 w-full max-md:mt-10 max-md:max-w-full text-blue-500 fill-blue-500">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} src={icon.src} alt={icon.alt}/>
            ))}
          </div>
        </div>
      </article>
      <article className="flex flex-col items-center self-stretch my-auto w-[180px]">
        <img
          loading="lazy"
          src={userIcon}
          alt="Profile"
          className="object-contain max-w-full aspect-square w-[180px]"
        />
        <div className="flex flex-col justify-center items-center p-3 mt-80 rounded-xl border-2 border-black border-solid w-[72px] max-md:mt-10">
          {actionIcons.map((icon, index) => (
            <div key={index} className={index > 0 ? "mt-5" : ""}>
              <ActionIcon src={icon.src} alt={icon.alt}  linkTo={icon.linkTo} />
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}

export default App;