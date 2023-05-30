import styles from "../../scss/globals.module.scss";
import Header from "../header/Header";
import GreenPanel from "../greenPanel/GreenPanel";
import Footer from "../footer/Footer";
import PrincipalComponent from "../principalComponent/PrincipalComponent";



const { mainLayout } = styles;

export default function MainLayout({ children }) {

  return (

    <div className={mainLayout}>
      <div className="row p-0 m-0">
        <div style={{ display: "flex", flexGrow: 1, padding: 0 }} >
          
          <div className="offcanvas offcanvas-start w-25" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
            <div className="offcanvas-header">
              <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body px-0">
              <GreenPanel />
            </div>
          </div>

          <div className="col ">
            <Header />
            <PrincipalComponent />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
