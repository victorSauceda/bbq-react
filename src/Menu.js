import React from "react";
import MenuItem from "./MenuItem";
import { API } from "aws-amplify";
import { Row, Container } from "react-bootstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  async componentDidMount() {
    const response = await API.get("rest-api", "/notes");
    console.log("Response: ", response);
    this.setState({ notes: response });
  }
  async saveNote(props) {
    console.log("propsofnote:", props);
    let res = await API.put("rest-api", `/notes/${props._id}`);
    console.log("this:", this);
    this.setState({ notes: res });
  }
  render() {
    return (
      <div>
        <h1
          className="text-center"
          style={{ marginTop: "25px", marginBottom: "15px" }}
        >
          Vics BBQ Menu
        </h1>
        <Container>
          <Row
            style={{
              marginTop: "25px",
              marginBottom: "15px",
              minHeight: "30rem"
            }}
          >
            {this.state.notes.map((item, keyIndex) => {
              return (
                <MenuItem
                  item={item}
                  key={keyIndex}
                  addToCart={this.props.addToCart}
                  removingCartItems={this.props.removingCartItems}
                  saveNote={this.saveNote}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Menu;
