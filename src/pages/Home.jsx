import React from "react";
import "./Home.css";
import Header from '../components/Header'
import { Container } from "react-bootstrap"

function Home() {

  return (
    <>
      <Header />
      <div className="content">
        <Container>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
            tempore distinctio facere deserunt quasi quas culpa. Itaque libero
            unde aperiam nostrum praesentium, placeat perspiciatis quo. Numquam
            tempore saepe molestias eos? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Repellat laboriosam, cumque dolore inventore
            incidunt doloremque ut voluptatum, obcaecati, corrupti maiores
            accusamus error. Porro, suscipit? Ipsam quisquam modi reiciendis ut.
            Rem?
          </p>
        </Container>
      </div>
    </>
  );
}

export default Home;