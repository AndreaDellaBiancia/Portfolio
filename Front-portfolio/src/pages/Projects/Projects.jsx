import CardProject from "../../components/CardProject/CardProject";
import Carroussel from "../../components/Carroussel/Carrousel";

function Projects() {
  let cards = [
    {
      key: 1,
      content: <CardProject />,
    },
    {
      key: 2,
      content: <CardProject />,
    },
    {
      key: 3,
      content: <CardProject />,
    },
    {
      key: 4,
      content: <CardProject />,
    },
    {
      key: 5,
      content: <CardProject />,
    },
    {
      key: 6,
      content: <CardProject />,
    },
    {
      key: 7,
      content: <CardProject />,
    },
  ];
  return (
    <div style={{marginTop: "10rem"}}>
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Projects;
