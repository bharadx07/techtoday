import React from "react";
import TopicsInfo from "../constants/TopicInfo";
import Software from "../images/Software.png";
import Hardware from "../images/Hardware.png";
import Finance from "../images/Finance.png";
import Buisness from "../images/Buisness.png";

function ClientTopicContent({ user }) {
  const userTopics = user.topics ?? [];

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

          default:
            topicImage = Software;
            break;
        }
        return (
          <section>
            <img src={topicImage} alt="Topic" />
            <h1>{topic}</h1>
            <p>{TopicsInfo[topic].description}</p>
            <button>Explore</button>
          </section>
        );
      })}
    </div>
  );
}

export default ClientTopicContent;
