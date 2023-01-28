'use client';

import { SyntheticEvent, useState } from 'react';
import { LinksFooterProps } from '~/core/interfaces/props';
import Links from '~/core/pages/global/Links';
import { Accordion, AccordionDetails, AccordionSummary } from './Styles';

export default function Accordions({ linksFooter }: LinksFooterProps) {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (_e: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='lg:hidden'>
      {linksFooter?.map(({ nameAccordion, links }, index) => (
        <Accordion
          key={nameAccordion}
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
