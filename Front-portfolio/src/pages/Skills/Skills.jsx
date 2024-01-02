import CardSkill from "../../components/CardSkill/CardSkill";

function Skills() {
  const cards = [
    {
      effect: "animate__animated animate__backInLeft",
      color: "#078ec0",
      title: "Front-end",
      subtitle1: "Langages",
      list1: [
        ["HTML.png", "HTML"],
        ["CSS.png", "CSS"],
        ["Javascript.png", "Javascript"],
        ["CSS.png", "CSS"],
        ["Typescript.png", "Typescript"],
      ],
      subtitle2: "Frameworks et bibliothèques",
      list2: [
        ["React.png", "React"],
        ["ReactNative.png", "React Native"],
        ["Graphql.png", "Apollo (GraphQL client)"],
        ["Jest.png", "Jest (testing)"],
      ],
    },
    {
      effect: "animate__animated animate__backInDown",
      color: "#be3a3a",
      title: "Back-end",
      subtitle1: "Langages",
      list1: [
        ["PHP.png", "PHP"],
        ["Node.png", "JavaScript (Node.js)"],
      ],
      subtitle2: "Frameworks et bibliothèques",
      list2: [
        ["Symfony.svg", "Symfony (PHP)"],
        ["Graphql.png", "Apollo (GraphQL server)"],
        ["TypeORM.png", "TypeORM"],
        ["Express.webp", "Express (Node.js)"],
      ],
      subtitle3: "Base de données",
      list3: [
        ["SQL.png", "SQL"],
        ["MySQL.png", "MySQL"],
        ["PostgreSQL.png", "PostgreSQL"],
      ],
    },
    {
      effect: "animate__animated animate__backInUp",
      color: "#38ac38",
      title: "Conception et Documentation",
      subtitle1: "Conception",
      list1: [
        ["Docker.png", "Docker"],
        ["Figma.png", "Figma"],
        [null, "UML (Unified Modeling Language)"],
        [null, "MCD (Modèle Conceptuel de Données)"],
        [null, "MPD (Modèle Physique de Données)"],
        [null, "MLD (Modèle Logique de Données)"],
      ],
      subtitle2: "Documentation",
      list2: [
        [null, "Élaboration de spécifications techniques"],
        [null, "Documentation du code source"],
        [null, "Création et gestion de cahiers des charges"],
        [null, "Rédaction de guides d'utilisation"],
      ],
      subtitle3: null,
      list3: null,
    },
    {
      effect: "animate__animated animate__backInRight",
      color: "#0b033bd4",
      title: "Gestion de projet et méthodologies",
      subtitle1: "Outils de gestion de projet",
      list1: [
        ["Trello.png", "Trello"],
        ["Jira.jpg", "Jira"],
        ["GitHub.png", "GitHub"],
      ],
      subtitle2: "Méthodologies",
      list2: [["Scrum.png", "Scrum"]],
      subtitle3: null,
      list3: null,
    },
  ];
  return (
    <div className="d-flex d-flex justify-content-around flex-wrap"  
    style={{marginBottom: "5rem"}}>
      {cards.map((card, index) => (
        <CardSkill key={index} {...card} />
      ))}
    </div>
  );
}

export default Skills;
