import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from "react-collapse";

import { css } from "@emotion/react";

class DropdownItem extends React.Component {
    state = {
        isDropdownOpen: false,
        dropdownToggleIcon: "closed"
    };

    onDropdownClicked = () => {
        this.setState(prevState => ({
            isDropdownOpen: !prevState.isDropdownOpen,
            dropdownToggleIcon: prevState.dropdownToggleIcon === "closed" ? "opened" : "closed"
        }));
    };

    selectIcon = (state) => {
        var icon;
        if (state == "closed") {
            icon = <FontAwesomeIcon icon={faPlus} />
        } else {
            icon = <FontAwesomeIcon icon={faTimes} />
        }

        return icon;
    };

    render() {
        return (
            <>
                <div className="faq-question">
                    <div className="faq-question-title">{this.props.title}</div>
                    <button
                        className=""
                        onClick={this.onDropdownClicked}
                    >
                        {this.selectIcon(this.state.dropdownToggleIcon)}
                    </button>
                </div>
                <Collapse isOpened={this.state.isDropdownOpen}>
                    <div className={displayText}>{this.props.children}</div>
                </Collapse>
            </>
        );
    }
}

export default DropdownItem;

//Light Theme
const headerBarLight = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  margin-bottom: 12px;
  padding: 5px;
  font-size: 20px;
`;

const openAccordionToggleLight = css`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const displayText = css`
  text-align: left;
`;

const accordionContainerLight = css`
  margin: 20px;
  color: black;
`;

//Dark Theme
const headerBarDark = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  margin-bottom: 12px;
  padding: 5px;
  font-size: 20px;
`;

const accordionContainerDark = css`
  margin: 20px;
  color: white;
`;

const openAccordionToggleDark = css`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
`;
