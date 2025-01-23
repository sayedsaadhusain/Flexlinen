import React from 'react'
import SectionTwoPartOneCard from "./SectionTwoPartOneCard";
import SectionTwoPartTwoCard from './SectionTwoPartTwoCard';
{/*Start section 2 Part-1*/}

function SectionTwo() {
    const cards = [
        { heading:"heading1" ,description:"description"},
        {heading:"heading2" ,description:"description"},
        {heading:"heading3" ,description:"description"},
    ]
  return (
    <div>
        <section class="text-center pt-16">
          <div className="text-2xl">Women's Collection</div>
          <div className="text-6xl">Activewear</div>
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
                {
                    cards.map((card,index) =><SectionTwoPartOneCard key={index}  heading={card.heading} description={card.description} />)
                }
            </div>
          </div>
        </section>

        {/*Start section 2 Part-2*/}

        <section class="">
          <div className="text-2xl text-center">Product</div>
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <SectionTwoPartTwoCard></SectionTwoPartTwoCard>
              <SectionTwoPartTwoCard></SectionTwoPartTwoCard>
              <SectionTwoPartTwoCard></SectionTwoPartTwoCard>
              <SectionTwoPartTwoCard></SectionTwoPartTwoCard>
            </div>
          </div>
        </section>

    </div>
  )
}

export default SectionTwo