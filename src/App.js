import "bulma/css/bulma.css";
import ProfileCard from "./Components/ProfileCard";
import AlexaImage from "../src/images/alexa.png";
import CortanaImage from "../src/images/cortana.png";
import SiriImage from "../src/images/siri.png";

const App = () => {
  return (
    <>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Personal Assistance</p>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa"
                image={AlexaImage}
                description="Alexa is a virtual assistant developed by Amazon, first used in the Amazon Echo and the Amazon Echo Dot smart speakers developed by Amazon Lab126. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                image={CortanaImage}
                description="Cortana is a virtual assistant created by Microsoft for Windows 10, Windows 10 Mobile, Windows Phone 8.1, Invoke smart speaker, Microsoft Band, Surface Headphones, Xbox One, iOS, Android, Windows Mixed Reality, and Amazon Alexa. Cortana can set reminders, recognize natural voice without the requirement for keyboard input, and answer questions using information from the Bing search engine. Cortana is currently available in English, Portuguese, French, German, Italian, Spanish, Chinese, and Japanese language editions, depending on the software platform and region in which it is used. Cortana mainly competes against assistants such as Apple Siri, Google Assistant, and Amazon Alexa."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri"
                image={SiriImage}
                description="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, and tvOS operating systems. The assistant uses voice queries and a natural-language user interface to answer questions, make recommendations, and perform actions by delegating requests to a set of Internet services. The software adapts to users' individual language usages, searches, and preferences, with continuing use. Returned results are individualized."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
