import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="green" icon="security  " title="Backend">
                        Our backend services offer professional programming practices for a wide range of business domains. 
                        We always provide technologically advanced and secure solutions for our partners.
                    </StatusCard>
                    <StatusCard
                        color="deepOrange"
                        icon="code"
                        title="Frontend"
                    >
                        Frontend is what drives our partners' businesses forward. 
                        Catchy and useful designs that are tailored for the best user experience.
                    </StatusCard>
                    <StatusCard
                        color="indigo"
                        icon="autorenew"
                        title="Dev-Ops"
                    >
                        Dev-ops can be a cumbersome experience for some projects. We are here to increase productivity using Continuous Integration and Continuous Deployment.
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">You always get the complete package with us</H4>
                        <LeadText color="blueGray">
                            Our philosophy is to provide the best customer satisfaction by handling each project in multi-directional ways.
                            Be our partner, and you will not have to think about what you might be missing.
                        </LeadText>
                        <LeadText color="blueGray">
                        <b>We make our projects scalable and sustainable.</b> We do not come up with the fastest and cheapest solution like most contractors.  We are here for the long run.
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Contact us now!
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Friendly Staff</H6>
                                <Paragraph color="blueGray">
                                    We not only develop, but also listen. We sit down together with our partners to understand them fully.
                                     There is not a single unnecessary question when you are with us.  
                                    
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
