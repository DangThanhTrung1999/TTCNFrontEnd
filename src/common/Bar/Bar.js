import React from "react";
import "./Bar.css";
function Bar(props) {
  return (
    <div className="wrapper">
      <div className="margin-area">
        <div className="dot one">1</div>
        <div className="dot two">2</div>
        <div className="dot three">3</div>
        <div className="dot four">4</div>
        <div className="progress-bar first" />
        <div className="progress-bar second" />
        <div className="progress-bar third" />
        <div className="message message-1">
          Choose Product
          <div>
            <div className="message message-2">
              Address User
              <div>
                <div className="message message-3">
                  Payment Method
                  <div>
                    <div className="message message-4">
                      Order Now<div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bar;
