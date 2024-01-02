import Card from "react-bootstrap/Card";
import "./Style.css";
function CardSkill({
  effect,
  color,
  title,
  subtitle1,
  list1,
  subtitle2,
  list2,
  subtitle3,
  list3,
}) {


  return (
    <Card className={window.innerWidth < 900 ? "mb-2 card-skill" : `mb-2 card-skill ${effect}`}>
      <Card.Header
        style={{
          background: `${color}`,
        }}
        className="card-skill-header"
      >
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Title className="card-skill-title"> {subtitle1}</Card.Title>
        <ul className="card-skill-list">
          {list1.map((item, index) => (
            <li style={{ listStyle: "square" }} key={index}>
              {item[0] ? (
                <img
                  src={require(`../../assets/images/technos/${item[0]}`)}
                  alt=""
                />
              ) : null}
              {item[1]}
            </li>
          ))}
        </ul>
        <Card.Title className="card-skill-title">{subtitle2}</Card.Title>
        <Card.Text>
          <ul className="card-skill-list">
            {list2.map((item, index) => (
              <li style={{ listStyle: "square" }} key={index}>
                {item[0] ? (
                  <img
                    src={require(`../../assets/images/technos/${item[0]}`)}
                    alt=""
                  />
                ) : null}
                {item[1]}
              </li>
            ))}
          </ul>
        </Card.Text>

        <Card.Title className="card-skill-title">{subtitle3}</Card.Title>
        <Card.Text>
          <ul className="card-skill-list">
            {list3?.map((item, index) => (
              <li style={{ listStyle: "square" }} key={index}>
                {item[0] ? (
                  <img
                    src={require(`../../assets/images/technos/${item[0]}`)}
                    alt=""
                  />
                ) : null}
                {item[1]}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardSkill;
