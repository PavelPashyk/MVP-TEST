import { EventItemFull } from "../../components/Events/EventItemFull";
import { Header } from "../../components/Header";
import { WrapperBack } from "../../components/WrapperBack";
import styles from "./style.module.css";

export const Details = () => {
  return (
    <WrapperBack>
    <Header />
    <EventItemFull />
  </WrapperBack>
  )
}