import React, { useState } from "react";

function Content({ data }) {
  const [newData, setNewData] = useState(data);

  return (
    <section className="container-fluid section-container-content">
      <div className="row g-0">
        {newData.map((element) => {
          return (
            <div key={element.id} className={element.section}>
              <h1>{element.title}</h1>
              <p>{element.paragraph}</p>
              <a href="#">{element.anchor}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Content;
