import React from "react"

const Links = (props) => {
    console.log(props)
    return (
    <div id="links">
        <h3>Links</h3>
        <a href={props.source.github}>https://github.com/liza</a>
        <a href={props.source.linkedin}>https://www.linkedin.com/in/liza</a>
    </div>
    )
}

export default Links