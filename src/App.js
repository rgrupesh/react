const Pet = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Luna"),
        React.createElement("h2",{},"Black"),
        React.createElement("h2",{},"Sweet"),
        );
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Adopt Me"),
        React.createElement(Pet),
        React.createElement(Pet)
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);