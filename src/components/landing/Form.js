import H3 from "@material-tailwind/react/Heading3";
import Paragraph from "@material-tailwind/react/Paragraph";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";

export default function Form() {
  return (
    <div className="flex flex-wrap justify-center mt-24">
      <div className="w-full lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="flex-auto p-5 lg:p-10">
            <div className="w-full text-center">
              <H3 color="gray">Be our partner.</H3>
              <Paragraph color="blueGray">
                Starting to do a business with us is easy. Just send us a
                message using one of these methods below:{" "}
              </Paragraph>
            </div>
            <div className="flex justify-center gap-10">
              <form action="mailto: leyla@aleylasoftware.com">
                <Button
                  color="lightBlue"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                  type="submit"
                >
                  E-mail
                </Button>
              </form>
              <form action="https://www.linkedin.com/in/aysegul-leyla-ilhan/"  target="_blank">
              <Button
                  color="lightBlue"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                  type="submit"
                >
                  Linkedin
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
