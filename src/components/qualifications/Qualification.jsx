import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            role="button"
            tabIndex="0"
            onClick={() => toggleTab(1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleTab(1);
              }
            }}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            role="button"
            tabIndex="0"
            onClick={() => toggleTab(2)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleTab(2);
              }
            }}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">bla</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">bla</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">bla</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">bla</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">bla</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">bla</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">bla</h3>
                <span className="qualification_subtitle">Moi University</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
