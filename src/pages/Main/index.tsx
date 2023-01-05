import { EventsList } from "../../components/Events/EventsList";
import { Header } from "../../components/Header";
import { WrapperBack } from "../../components/WrapperBack";
import { eventsArrayTest } from "../../mocks/eventsArrayTest";
import styles from "./style.module.css";

export const Main = () => {
  return (
    <WrapperBack>
      <Header />
      <EventsList arr={eventsArrayTest} />
    </WrapperBack>
  );
};
