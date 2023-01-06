import { useNavigate } from "react-router-dom";
import { EventsList } from "../../components/Events/EventsList";
import { Header } from "../../components/Header";
import { WrapperBack } from "../../components/WrapperBack";
import { eventsArrayTest } from "../../mocks/eventsArrayTest";
import styles from "./style.module.css";

export const Main = () => {
  const navigate = useNavigate();

  const navigateEventItem = (id: number | undefined) => {
    navigate(`/details/${id}`);
  };

  return (
    <WrapperBack>
      <Header />
      <EventsList arr={eventsArrayTest} onClickEvent={navigateEventItem} />
    </WrapperBack>
  );
};
