import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Prefer = () => {
  const prefer = useSelector(state => {
    return state.preferSection.content;
  });

  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <Container>
      <h2 className="text-center">Preferiti</h2>
      {prefer.map((preferObj, i) => (
        <Row>
          <Col>
            <div className="d-flex align-items-center justify-content-between">
              <Job data={preferObj} />
              <Button
                type="button"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_PREFER",
                    payload: i,
                  });
                }}
                className={location.pathname !== "/favourites" ? "d-none" : "bg-danger"}
              >
                Rimuovi dai Preferiti
              </Button>
            </div>
          </Col>
        </Row>
      ))}
      <Link to={"/"}>Torna alla pagina precedente</Link>
    </Container>
  );
};

export default Prefer;
