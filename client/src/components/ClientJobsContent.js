import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";

function ClientJobsContent({ user, page, jobs }) {
  const [pagination, setPagination] = useState(1)
  const [button, setButton] = useState("Show More")

  useEffect(() => {
    if(pagination === 3) {
      setButton("Show Less")
    } else {
      setButton("Show More")
    }

  }, [pagination])


  if (!user || !jobs) {
    return (
      <div
        style={{
          marginTop: "10rem",
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          alignItems: "center",
        }}
      >
        <Loader type="TailSpin" color="#cb4745" height={50} width={50} />
      </div>
    );
  }

  

  const jobDisplay = jobs.slice(0, user.jobDefaultCount*pagination);

  return (
    <main className="jobs">
      <h1>
        {page.substring(0, 1).toUpperCase() +
          page.substring(1, page.length) +
          " Jobs"}
      </h1>
      <section>
        {jobDisplay.map((jobItem) => {
          console.log(jobItem);
          const company = jobItem.company;
          const location = jobItem.location;
          const title = jobItem.title;
          const description = jobItem.description;
          const url = jobItem.url;
          return (
            <article key={uuidv4()}>
              <div>
              <div>
                <h6>{company}</h6>
                <h6>{location}</h6>
              </div>
              <h2>{title}</h2>
              <p>{description.substring(0, 200).replace(/<\/?[^>]+(>|$)/g, "") + "..."}</p>
              </div>
              <a href={url} target="_blank" rel="noreferrer" className="button">
                View Full Job
              </a>
            </article>
          );
        })}
      </section>
      <button onClick={() => {pagination === 3 ? setPagination(1) : setPagination(pagination+1)}}>{button}</button>
    </main>
  );
}

export default ClientJobsContent;
