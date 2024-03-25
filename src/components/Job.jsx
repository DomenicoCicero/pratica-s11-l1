import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button
          type="button"
          onClick={() => {
            dispatch({
              type: "ADD_TO_PREFER",
              payload: data,
            });
          }}
          className={location.pathname === "/favourites" ? "d-none" : ""}
        >
          Aggiungi a Preferiti
        </Button>
      </Col>
    </Row>
  );
};

export default Job;