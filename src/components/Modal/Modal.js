import React, { useState } from "react";
import "./Modal.css";
import Support from "../../assets/donate.png";
import Bank from "../../assets/sterlingLogo.png";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="contain">
    <div className="contain2">
      <div className="support">
        <img src={Support} alt="Support" />
      </div>
      <div className="containModal">
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>BANK DETAILS</h2>
              <div className="contentWrap">
                <div className="content2">
                  <img src={Bank} alt="Bank Logo" />
                </div>
                <div className="content1">
                  <p className="accountNumber">BANK NAME:</p>
                  <h1 className="accountNum">STERLING BANK</h1>
                  <hr/>
                  <p className="accountNumber">ACCOUNT NUMBER:</p>
                  <h1 className="accountNum">0094486912</h1>
                  <hr/>
                  <p className="accountMame">ACCOUNT NAME:</p>
                  <h1 className="mayframe">MAYFRAME DEVELOPMENT INITIATIVE</h1>
                  <hr/>
                </div>
              </div>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
        <div>
          <h3>Support Our Mission</h3>
          <h4>
            Every contribution, no matter the size, makes a difference. Your
            generosity helps us to equip Business Membership Organization
            (BMOs), Government Organizations, Women and Youth groups with
            knowledge of building sustainable development organization.
          </h4>
        </div>
        <button onClick={toggleModal} className="btn-modal">
          Donate
        </button>
      </div>
      </div>
    </div>
  );
}
