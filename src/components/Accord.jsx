import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



const Accord = () => {
  return (
    <div className='full md:py-10'>
        <div className='container mx-auto p-4 my-10'>
            <h3 className='easy text-[32px] md:text-[48px] lg:text-[64px] font-semibold'>FAQs</h3>
        <Accordion allowZeroExpanded={true}  className='md:flex mt-5 mx-auto'>
            <div className='flex-[50%] md:pr-5'>
            <AccordionItem className=' lg:w-[614px] font-semibold shadow-xl'>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What is wallet?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className=' mt-6 md:mt-10 font-semibold lg:w-[614px] shadow-xl'>
                <AccordionItemHeading>
                    <AccordionItemButton>
                     What is wallet? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className=' mt-6 md:mt-10 font-semibold lg:w-[614px] shadow-xl'>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How much does it cost to use wallet?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </div> 

            <div className='flex-[50%] md:pr-1'>
            <AccordionItem className=' mt-6 md:mt-0 font-semibold lg:w-[614px] shadow-xl'>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How do i get started?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='mt-6 md:mt-10 font-semibold lg:w-[614px] shadow-xl'>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What are the advantages of using wallet?
                    </AccordionItemButton> 
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </div> 
        </Accordion>
        </div>
    </div>
  )
}

export default Accord