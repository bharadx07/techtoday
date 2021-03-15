import React from "react";
import { Icon } from "@iconify/react";
import outlineWorkOutline from "@iconify/icons-ic/outline-work-outline";
import news20Filled from "@iconify/icons-fluent/news-20-filled";

function HomeProductSections() {
  return (
    <div className="home-products-section">
      <h1>Your Personal Hub</h1>
      <h5>
        Find all the Information you are Intrested In, Collected In One Place
      </h5>
      <section className="right">
        <div>
          <h1>News</h1>
          <p>
            Catch up with all the current events taking place in many
            industries. Learn about the topic by reading quick news snippets or
            if you are instrested, view the full article withone click.
          </p>
        </div>
        <Icon
          
          icon={news20Filled}
          className="icon iconSpecial"
        />
      </section>
      <section className="left">
      <Icon
      className="icon show"
      icon={outlineWorkOutline}
 
    />
        <div>
          <h1>Jobs</h1>
          <p>
            Wanting to find a job in a certain topic. Check the job section of
            certain field and view the availible jobs near you in that industry
          </p>
        </div>
        <Icon
      className="icon hide"
      icon={outlineWorkOutline}

    />
      </section>
    </div>
  );
}

export default HomeProductSections;
