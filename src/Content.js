function Content({loggedIn, text}) {
    return loggedIn && <h1 style={{fontSize: "100pt"}}>{text}</h1>
}

export default Content