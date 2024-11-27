//icons
import {
  HomeIcon,
  PencilIcon,
  BriefcaseIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/outline";

import ProjectImg1 from "../assets/img/project1.png";
import ProjectImg2 from "../assets/img/project2.png";
import ProjectImg3 from "../assets/img/project3.png";
import Logo1 from "../assets/img/logo1.png";
import Logo4 from "../assets/img/logo4.png";
import Logo5 from "../assets/img/logo5.png";
import Avatar1 from "../assets/img/avatar1.png";
import Avatar2 from "../assets/img/avatar2.png";
import Avatar3 from "../assets/img/avatar3.png";
import Avatar4 from "../assets/img/avatar4.png";
import Angular from "../assets/svg/angular.svg";
import React from "../assets/svg/react.svg";
import Vue from "../assets/svg/vue-9.svg";
import ViteJS from "../assets/svg/vitejs.svg";
import Python from "../assets/svg/python.svg";
import Node from "../assets/svg/node.svg";
import NestJS from "../assets/svg/nestjs.svg";
import SQL from "../assets/svg/sql.svg";
import Codeigniter from "../assets/svg/codeigniter.svg";

export const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: HomeIcon,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: PencilIcon,
  },
  {
    name: "Services",
    href: "#services",
    icon: BriefcaseIcon,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: EnvelopeIcon,
  },
];

export const projectsItems = [
  {
    title: "SAS Website",
    image: ProjectImg1,
  },
  {
    title: "Social Mendia Website",
    image: ProjectImg2,
  },
  {
    title: "Admin Panel Website",
    image: ProjectImg3,
  },
];

export const skillsItems = [
  {
    name: "Vue",
    logo: Vue,
  },
  {
    name: "Angular",
    logo: Angular,
  },
  {
    name: "Codeigniter",
    logo: Codeigniter,
  },
  {
    name: "React",
    logo: React,
  },
  {
    name: "ViteJS",
    logo: ViteJS,
  },
  {
    name: "Python",
    logo: Python,
  },
  {
    name: "Node",
    logo: Node,
  },
  {
    name: "NestJS",
    logo: NestJS,
  },
  {
    name: "SQL",
    logo: SQL,
  },
];

export const servicesItems = [
  {
    title: "Front Development",
    description:
      "Desarrollo de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías web. Creación de experiencias de usuario intuitivas y atractivas que mejoran la interacción y satisfacción del usuario final.",
    logo: Logo1,
  },
  {
    title: "Backend Development",
    description:
      "Desarrollo de aplicaciones del lado del servidor utilizando tecnologías robustas y escalables. Implementación de APIs, gestión de bases de datos y aseguramiento de la seguridad y eficiencia en el procesamiento de datos.",
    logo: Logo4,
  },
  {
    title: "Servers Management",
    description:
      "Gestión y mantenimiento de servidores para asegurar un rendimiento óptimo y una alta disponibilidad. Configuración, monitoreo y solución de problemas de servidores para garantizar la estabilidad y seguridad de las aplicaciones y servicios.",
    logo: Logo5,
  },
];
