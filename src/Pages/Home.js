import React from "react";
import Form from "../components/Form";
import "../CSS/Home.css";
import Circle from "../components/Circle";
import CircleData from "../components/Data";
import CardData from "../components/CardData";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-section-container">
          <div className="home-content-div">
            <h1>Business loans made easy</h1>
            <p>
              We’ve simplified the process. Apply for our business loan in
              minutes, without painful paperwork or waiting in queues.
            </p>
            <button type="submit" className="home-section-btn">
              learn more
            </button>
          </div>
          <Form />
        </div>
      </div>
      <section className="homepage-second-section">
        <div className="homepage-second-section-div">
          <h1>How our business loans work</h1>
          <p id="home-second-section-p">
            We’ve simplified the process. Apply for our business loan in
            minutes, without painful paperwork or waiting in queues.
          </p>
          <div className="homepage-second-section-general-items-div">
            {CircleData.map((values) => {
              return (
                <Circle
                  digit={values.number}
                  title={values.heading}
                  content={values.Text}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="third-section">
        <div>
          <h1>Explore loan options to fit your needs.</h1>
          <p id="home-second-section-p">
            Whether it’s a Payday Loan, a Title Loan, or an Installment Loan, we
            can help you get the money you need.
          </p>
          <div className="card-general-div">
            {CardData.map((values) => {
              return (
                <Card
                  icon={values.icon}
                  title={values.heading}
                  content={values.Text}
                  ClickText={values.ClickText}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="fourth-section">
        <div className="fourth-sectio">
          <p>apply to the industry best lenders with paycheck today </p>
          <button type="submit" className="contact-section-btn">
            {" "}
            contact us
          </button>
        </div>
      </section>
    </>
  );
}
