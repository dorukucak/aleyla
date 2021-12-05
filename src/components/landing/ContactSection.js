import React, { useRef } from 'react';
import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';



export default function ContactSection() {
    
    return (
        <section className="pb-20 relative block bg-gray-100" >
            <div className="container mx-auto lg:pt-24 pb-20 bg-orange-100">
                <Title heading="Tech Partners">
                    ALEYLA Software is keen on partnering with other tech teams. Given our 10 years of solid
                    IT experience, you can trust us with ongoing or starting projects. We will gladly to join your project team and create
                    awesome stuff together.

                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="area_chart" title="Fintech">
                        Trust us with your B2B and B2C projects. We can help you build financial and reporting tools that can
                        take user exprience to the next level. 

                    </ContactCard>
                    <ContactCard icon="sports_esports" title="Online Betting">
                        We do not take chances when it comes to online betting. Secure and reliable backend operations are key. 
                        Thanks to our betting experience, we can work on adding new features, while your teams focus on 
                        running things smoothly.
                    </ContactCard>
                    <ContactCard icon="list_alt" title="Listing and Retail">
                        We have extensive know-how on listing and retail website development.
                        Our partners are major travel and real estate listing companies that receive thousands of traffic each day.
                    </ContactCard>
                </div>                
            </div>
            <Form />
        </section>
    );
}
