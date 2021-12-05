import { useHistory } from "react-router-dom";
import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/profile/Header";
import Content from "components/profile/Content";

export default function Profile() {
  const history = useHistory();

  const goDown = () => {
    history.push("/");
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  };
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar goDown={goDown} />
      </div>
      <main>
        <Header />
        <Content />
      </main>
      <DefaultFooter />
    </>
  );
}
