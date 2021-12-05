import Button from "@material-tailwind/react/Button";
import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Icon from "@material-tailwind/react/Icon";
import LeadText from "@material-tailwind/react/LeadText";
import ProfilePicture from "assets/img/team-2-800x800.jpg";

export default function Content() {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-40 -mt-20">
                    <Image
                      src="https://media-exp1.licdn.com/dms/image/C4D03AQHeNsFrANkoUQ/profile-displayphoto-shrink_400_400/0/1579787863070?e=1643846400&v=beta&t=oxC4tgxbwBcxsxpRpTtwqEIZ-rqWK75_D4aJTj-ZFfo"
                      alt="Profile picture"
                      raised
                      rounded
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                <form
                  action="https://www.linkedin.com/in/aysegul-leyla-ilhan/"
                  target="_blank"
                >
                  <Button color="lightBlue" ripple="light" type="submit">
                    Connect
                  </Button>
                </form>
              </div>{" "}
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      10
                    </span>
                    <span className="text-sm text-gray-700">
                      years of experience
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      5
                    </span>
                    <span className="text-sm text-gray-700">Companies</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      8
                    </span>
                    <span className="text-sm text-gray-700">Projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center my-8">
              <H3 color="gray">leyla ilhan</H3>
              <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                <Icon name="place" size="xl" />
                London, United Kingdom
              </div>
              <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                <Icon name="work" size="xl" />
                Contract IT Software Developer / Founder of Aleyla Software Ltd.
              </div>
              <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                <Icon name="account_balance" size="xl" />
                Computer Engineering - Firat University
              </div>
            </div>

            <div className="mb-10 py-2 border-t border-gray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                  <LeadText color="blueGray">
                    Expert backend developer with 10 years of progressive
                    experience in the industry. Proven track record of
                    developing successful and efficient products for the
                    industry leaders. Extensive background in Java and Spring
                    technologies. <br />
                    <br />
                    <br />
                    <p className="font-bold">QUALIFICATIONS and SKILLS</p>
                    <br />
                    <hr /> <br />• Java, JEE, JSF, JSP, JUnit Test, Primefaces,
                    Richfaces <br />
                    • Micro service architecture, Event driven design
                    <br />
                    • Hibernate, JPA, PostgreSQL, Morphia, MongoDB, Elastic
                    Search
                    <br />
                    • Spring Boot, Spring MVC, Spring Security, Seam Framework
                    <br />
                    • Kubernetes, Docker, Jenkins, Wildfly, Tomcat <br />
                    • Maven, SVN, Git, Bitbucket, Netscaler, Swagger, Jira,
                    Confluence
                    <br />
                    • Rest, Soap, Jasper Reports, XML, JSON
                    <br />
                    • MacOs, Linux, Windows
                    <br />
                    • IntelliJ, Eclipse, iReport, SourceTree, NetBeans, pgAdmin,
                    Robo Mongo
                    <br />
                    • Agile methodologies Scrum and Kanban
                    <br />
                    <br />
                    <br />
                    <p className="font-bold">PROFESSIONAL EXPERIENCES</p>
                    <br />
                    <hr /> <br />
                    <strong>EMLAKJET</strong>: <italic>(2020-2021)</italic>{" "}
                    Emlakjet is an online real estate website that offers real
                    estate services such as sales, rental and investment to its
                    personal and corporate customers in the fastest and most
                    reliable way. I worked on distributed backend projects as a
                    backend developer.
                    <br />
                    <strong>BETBULL/WYNN</strong>: <italic>(2019-2020)</italic>{" "}
                    BetBull is a startup social betting company, operating in
                    UK, DE and USA. I worked on distributed products as a
                    backend developer.
                    <br />
                    <strong>ETS TUR</strong>: <italic>(2016-2019)</italic>
                    Etstur is a tourism company which has 66% of market in
                    Turkey. The system is being used for searching hotels,
                    tours, transfers, making reservations with intranet,
                    extranet and B2C modules. I worked in different products of
                    the company (B2B, B2C, Finance, Marketing).
                    <br />
                  </LeadText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
