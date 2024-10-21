import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "./Dropdown.css"

export default function Dropdown() {
  return (
    <Accordion transition transitionTimeout={200}>
      <AccordionItem header="Como contactar
?" >
        Contáctanos para proporcionarte la información relevante a través de nuestro correo: Cicadeinternacional@gmail.com o formulario de contacto.
      </AccordionItem>

      <AccordionItem header="Incubación Binacional">
       Estar atento a nuestras convocatorias en cicade.network/convocatorias/
      </AccordionItem>

      <AccordionItem header="Conectar con representante">
      Puedes hacer llegar tu correo a ORLANDO.AGUILERA.81@GMAIL.COM
      </AccordionItem>
    </Accordion>
  );
}