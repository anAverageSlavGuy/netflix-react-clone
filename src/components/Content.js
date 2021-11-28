import React from 'react'

function Content(props) {
    const {title, description, imageUrl, imageAlign } = props.item;
    return (
        <div className="content-item-container">
            <div className={`${(imageAlign === "left") ? "content-item-reverse" : "content-item"}`}>
                <div className="content-item-text">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="content-item-image">
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    )
}

export default Content
