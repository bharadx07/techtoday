import React from "react";
import TopicsInfo from "../constants/TopicInfo";
import Software from "../images/Software.png";
import Hardware from "../images/Hardware.png";
import Finance from "../images/Finance.png";
import Buisness from "../images/Buisness.png";
import Medical from "../images/Medical.jfif";
import Security from "../images/Security.jfif";
import ARVR from "../images/VRAR.jfif";
import AI from "../images/AI.jfif";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ClientTopicContent({ user }) {
  const userTopics = user.topics ?? "Loading"

  if(userTopics === "Loading") {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="topics-content">
      {userTopics.map((topic) => {
        let topicImage;
        switch (topic) {
          case "Software":
            topicImage = Software;
            break;
          case "Hardware":
            topicImage = Hardware;
            break;
          case "Buisness":
            topicImage = Buisness;
            break;
          case "Finance":
            topicImage = Finance;
            break;

          case "Medical":
            topicImage = Medical;
            break;
          case "Security":
            topicImage = Security;
            break;
          case "AI":
            topicImage = AI;
            break;
          case "VR/AR":
            topicImage = ARVR;
            break;

          default:
            topicImage = Software;
            break;
        }
        return (
          <section key={uuidv4()}>
            <img src={topicImage} alt="Topic" />
            <h1>{topic}</h1>
            <p>{TopicsInfo[topic].description}</p>

            <Link className="button" to={`/topic/${topic.toLowerCase()}/news`}>
              <button>Explore</button>
            </Link>
          </section>
        );
      })}
    </div>
  );
}

export default ClientTopicContent;
