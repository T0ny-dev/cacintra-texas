import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "./Dropdown.css"

export default function Dropdown() {
  return (
    <Accordion transition transitionTimeout={200}>
      <AccordionItem header="Como Ingresar a la Cámara Empresarial
?" >
        Contáctanos para proporcionarte la información relevante a través de nuestro correo: riobravo@canacintra.org.mx o formulario de contacto.
      </AccordionItem>

      <AccordionItem header="Como sigo las noticias ?">
      A través de nuestro blog publicamos todo lo relevante de nuestra cámara y actividades.
      </AccordionItem>

      <AccordionItem header="Como utilizar la agenda ?">
      Dándole clic en el apartado de la agenda puedes seguir nuestros eventos.
      </AccordionItem>
    </Accordion>
  );
}