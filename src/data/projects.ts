import boleiros from "/projects/1.boleiros.png";
import peregrino from "/projects/2.peregrino.png";
import boleiros_liga from "/projects/3.boleirosliga.jpg";
import leandro_barber from "/projects/4.LeandroBarber.png";
import coco_campeao from "/projects/5.coco_campeao.png";
import portfy from "/projects/7.portfy.png";
import food from "/projects/9.food.png";
import talktome from "/projects/10.talktome.png";
import rosalia from "/projects/11.rosalia.jpeg";
import liberdade from "/projects/12.liberdade.jpg";
import react from "/tecnologies/react2.png";
import typescript from "/tecnologies/typeScript.png";
import nodejs from "/tecnologies/nodejs.png";
import nextjs from "/tecnologies/nextjs.png";
import tailwind from "/tecnologies/tailwind.png";
import lista_contatos from "/projects/13.Lista_contatos.png";
import peregrinho2 from "/projects/14.peregrinho2.png";
import toDo_JackExperts from "/projects/15.ToDo_JackExperts.jpeg";

export interface IProjects {
  id: number;
  nome: string;
  img: string;
  tipo: string;
  descrição: string;
  git: string;
  deploy?: string;
  tech: string[];
}

export const projects = [
  {
    id: 15,
    nome: "To Do List",
    img: toDo_JackExperts,
    tipo: "FullStack",
    descrição: "Desafio Jack Experts",
    git: "https://github.com/Wilrrama/Desafio_ToDoList",
    deploy: "",
    tech: [react, , nodejs, typescript],
  },
  {
    id: 14,
    nome: "Peregrino 2",
    img: peregrinho2,
    tipo: "Front-End",
    descrição: "Aplicação com pregações salvas pelo Whatzapp ver 2024",
    git: "https://github.com/Wilrrama/peregrino2",
    deploy: "https://peregrino2.vercel.app/",
    tech: [react, typescript],
  },
  {
    id: 13,
    nome: "Lista de contatos",
    img: lista_contatos,
    tipo: "FullStack",
    descrição: "Aplicação full-stack lista de contatos",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/m6_Projeto_FullStack",
    deploy: "",
    tech: [react, , nodejs, typescript],
  },
  {
    id: 12,
    nome: "Liberdade",
    img: liberdade,
    tipo: "Front-End",
    descrição: "Aplicação para a equipe campeão da Copa Amizade 2024",
    git: "https://github.com/Wilrrama/liberdade",
    deploy: "https://liberdade.vercel.app/",
    tech: [react],
  },
  {
    id: 11,
    nome: "Rosália F. C.",
    img: rosalia,
    tipo: "Front-End",
    descrição: "Aplicação para a equipe campeão da Copa Euro 2024",
    git: "https://github.com/Wilrrama/rosalia_fc",
    deploy: "https://rosaliafc.vercel.app/",
    tech: [react],
  },
  {
    id: 10,
    nome: "Talk to me",
    img: talktome,
    tipo: "FullStack",
    descrição: "Aplicativo de Video-Conferencia.",
    git: "https://github.com/Wilrrama/talk_to_me_hero_code",
    deploy: "",
    tech: [nodejs, typescript, nextjs, tailwind],
  },
  {
    id: 9,
    nome: "Food",
    img: food,
    tipo: "FullStack",
    descrição: "Cardápio de Lanchonete, Crud, consumo de API.",
    git: "https://github.com/Wilrrama/Food_devPoint",
    deploy: "",
    tech: [react, nodejs],
  },
  {
    id: 8,
    nome: "Kenzie Hub",
    img: kenkie_hub,
    tipo: "Front-End",
    descrição: "Cadastro dos habilidades, Crud, consumo de API.",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_Wilson",
    deploy: "https://react-entrega-kenzie-hub-wilson.vercel.app/dashboard",
    tech: [react],
  },
  {
    id: 7,
    nome: "Portfy",
    img: portfy,
    tipo: "Front-End",
    descrição:
      "Cria um portifolio on-line, com CRUD e consumo de API, postagem de projetos.",
    git: "https://github.com/mariosilva81/m3-g5-portify",
    deploy: "https://portify-indol.vercel.app",
    tech: [react, typescript],
  },

  {
    id: 5,
    nome: "Unidos do Coco",
    img: coco_campeao,
    tipo: "Front-End",
    descrição:
      "Aplicação para a equipe campeã da Copa dos Campeões 2023, organizada pela Liga Hortolandense ",
    git: "https://github.com/Wilrrama/coco_campeao_2023",
    deploy: "https://unidos-do-coco.vercel.app/",
    tech: [react],
  },
  {
    id: 4,
    nome: "Black Styllus Barber",
    img: leandro_barber,
    tipo: "Front-End",
    descrição:
      "Aplicação para meu barbeiro de confiança, divulgando seu Serviçoes e Produtos. E marcando presença na Web",
    git: "https://github.com/Wilrrama/blackStyllusLeandro",
    deploy: "https://blackstyllus.vercel.app/",
    tech: [react],
  },
  {
    id: 3,
    nome: "Boleiros Liga",
    img: boleiros_liga,
    tipo: "Front-End",
    descrição:
      "Gerenciador de Lista de Participantes e Itens, de uma partida de futebol. Agora com venda de material Esportivo: Bolas",
    git: "https://github.com/Wilrrama/Boleiros-Liga",
    deploy: "https://boleiros-liga.vercel.app/",
    tech: [react],
  },
  {
    id: 2,
    nome: "O Peregrino",
    img: peregrino,
    tipo: "Front-End",
    descrição: "Aplicação com pregações salvas pelo Whatzapp",
    git: "https://github.com/Wilrrama/Peregrino",
    deploy: "https://peregrino.vercel.app/",
    tech: [react],
  },
  {
    id: 1,
    nome: "Lista de Boleiros",
    img: boleiros,
    tipo: "Front-End",
    descrição:
      "Gerenciador de Lista de Participantes de uma partida de futebol",
    git: "https://github.com/Wilrrama/lista-boleiros",
    deploy: "https://lista-boleiros.vercel.app",
    tech: [react],
  },
];
