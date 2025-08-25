import logo from './logo.png'
import avatar2 from './avatar2.png'
import attherate from './attherate.svg'
import github from './github.svg'
import linkidin from './linkidin.svg'
import avatar1 from './avatar1.png'
import html from './html.svg'
import cpp from './cpp.png'
import js from './js.svg'
import css from './css.svg'
import mysql from './mysql.svg'
import python from './python.png'
import sql from './sql.png'
import react from './react.png'
import node from './node.png'
import express from './express.png'
import express2 from './express2.png'
import mongodb from './mongodb.png'
import tailwind from './tailwind.png'
import docker from './docker.png'
import vscode from './vscode.png'
import copilot from './copilot.png'
import jupyter from './jupyter.png'
import gpt from './gpt.png'
import postman from './postman.png'
import dataEngi from './dataEngi.png'
import databricks from './databricks.png'
import dataAna from './dataAna.png'
import etl from './ETL.png'
import gemini from './gemini.svg'
import texture1 from './texture1.jpg'
import texture2 from './texture2.jpg'
import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import project4 from './project4.png'
import bg1 from './bg1.png'
import bg2 from './bg2.png'
import bg3 from './bg3.png'
import bg4 from './bg4.jpg'
import github2 from './github2.png'

import { Github } from '@/app/atoms'



export const assets = {
  logo,
  avatar2,
  attherate,
  github,
  linkidin,
  avatar1,
  html,
  cpp,
  js,
  mysql,
  css,
  python,
  sql,
  react,
  node,
  express,
  mongodb,
  tailwind,
  docker,
  vscode,
  copilot,
  jupyter,
  gpt,
  postman,
  gemini,
  dataEngi,
  databricks,
  etl,
  dataAna,
  texture1,
  texture2,
  project1,
  project2,
  project3,
  project4,
  bg1,
  bg2,
  bg3,
  bg4,
  github2,
  express2
}

import Image from 'next/image'


export const cards = [
  {
    id: 1,
    icon: <Image src={assets.cpp} className="w-[70px] h-[70px]" />,
    title: "C++",
  },
  {
    id: 2,
    icon: <Image src={assets.python} className="w-[70px] h-[70px]" />,
    title: "Python",
  },
  {
    id: 3,
    icon: <Image src={assets.sql} className="w-[70px] h-[70px]" />,
    title: "SQL",
  },
  {
    id: 4,
    icon: <Image src={assets.html} className="w-[70px] h-[70px]" />,
    title: "HTML",
  },
  {
    id: 5,
    icon: <Image src={assets.css} className="w-[70px] h-[70px]" />,
    title: "CSS",
  },
  {
    id: 6,
    icon: <Image src={assets.js} className="w-[70px] h-[70px]" />,
    title: "JavaScript",
  },
  {
    id: 7,
    icon: <Image src={assets.react} className="w-[70px] h-[70px]" />,
    title: "React Js",
  },
  {
    id: 8,
    icon: <Image src={assets.node} className="w-[70px] h-[70px]" />,
    title: "Node Js",
  },
  {
    id: 9,
    icon: <Image src={assets.express2} className="w-[70px] h-[70px]" />,
    title: "Express Js",
  },
  {
    id: 10,
    icon: <Image src={assets.mongodb} className="w-[70px] h-[70px]" />,
    title: "MongoDB",
  },
  {
    id: 11,
    icon: <Image src={assets.mysql} className="w-[70px] h-[70px]" />,
    title: "MySQL",
  },
  {
    id: 12,
    icon: <Image src={assets.tailwind} className="w-[70px] h-[70px]" />,
    title: "Tailwind",
  },
  {
    id: 13,
    icon: <Image src={assets.github2} className="w-[70px] h-[70px]" />,
    title: "Github",
  },
  {
    id: 14,
    icon: <Image src={assets.docker} className="w-[70px] h-[70px]" />,
    title: "Docker",
  },
  {
    id: 15,
    icon: <Image src={assets.vscode} className="w-[70px] h-[70px]" />,
    title: "VsCode",
  },
  {
    id: 16,
    icon: <Image src={assets.jupyter} className="w-[70px] h-[70px]" />,
    title: "Jupyter",
  },
  {
    id: 17,
    icon: <Image src={assets.copilot} className="w-[70px] h-[70px]" />,
    title: "Copilot",
  },
  {
    id: 18,
    icon: <Image src={assets.gemini} className="w-[70px] h-[70px]" />,
    title: "Gemini",
  },
  {
    id: 19,
    icon: <Image src={assets.gpt} className="w-[70px] h-[70px]" />,
    title: "ChatGPT",
  },
  {
    id: 20,
    icon: <Image src={assets.postman} className="w-[70px] h-[70px]" />,
    title: "Postman",
  },
  {
    id: 21,
    icon: <Image src={assets.dataEngi} className="w-[70px] h-[70px]" />,
    title: "Data Eng",
  },
  {
    id: 22,
    icon: <Image src={assets.databricks} className="w-[70px] h-[70px]" />,
    title: "Databrick",
  },
  {
    id: 23,
    icon: <Image src={assets.etl} className="w-[70px] h-[70px]" />,
    title: "ETL",
  },
  {
    id: 24,
    icon: <Image src={assets.dataAna} className="w-[70px] h-[70px]" />,
    title: "Data Ana",
  },
];


export const projects = [
  {
    title: "TubeEngine (Youtube Clone)",
    tags: ["MERN", "Full Stack"],
    industry: "Personal Project",
    image: <Image
      src={assets.project1}
      alt=""
      className="w-full h-60 md:h-80 object-cover mb-8 rounded-xl"
    />,
    link: "https://tube-mern-project.vercel.app/",
  },
  {
    title: "UI Design",
    tags: ["React", "Frontend"],
    industry: "Company's Task",
    image: <Image
      src={assets.project2}
      alt=""
      className="w-full h-60 md:h-80 object-cover mb-8 rounded-xl"
    />,
    link: "https://ui-design-swart.vercel.app/",
    
  },
  {
    title: "Post Craft",
    tags: ["Frontend", "Appwrite"],
    industry: "Personal Project",
    image: <Image
      src={assets.project3}
      alt=""
      className="w-full h-60 md:h-80 object-cover mb-8 rounded-xl"
    />,
    link: "https://postcraft.appwrite.network/",
  },
  {
    title: "Warehouse Pipeline",
    tags: ["Databricks", "ETL"],
    industry: "Personal Project",
    image: <Image
      src={assets.project4}
      alt=""
      className="w-full h-60 md:h-80 object-cover mb-8 rounded-xl"
    />,
    link: "https://github.com/CodewithDeep23/CRM-ERP-Data-Warehouse-Pipeline",
  },
];