import { AccordionsProps } from '@interfaces/props';
import { SyntheticEvent, useState } from 'react';
import Links from '../Links';
import { Accordion, AccordionDetails, AccordionSummary } from './Styles';

export default function Accordions({ linksFooter }: AccordionsProps) {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (_e: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='md:invisible text-base capitalize font-[530] my-5'>
      {linksFooter?.map(({ nameAccordion, links }, index) => (
        <Accordion
          key={index}
          expanded={expanded === `painel${index}`}
          onChange={handleChange(`painel${index}`)}
          className='py-3'
        >
          <AccordionSummary
            aria-controls={`painel${index}-content`}
            id={`painel${index}-header`}
          >
            <span>{nameAccordion}</span>
          </AccordionSummary>
          <AccordionDetails>
            <Links
              links={links}
              classList='ml-2'
              classItem='text-gray-400 font-normal py-2'
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
