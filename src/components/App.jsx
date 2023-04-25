import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import upcomingEvents from "upcoming-events.json"


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   // display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents}/>
    </div>
  );
};
