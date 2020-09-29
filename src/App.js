const Cat = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Luna"),
        React.createElement("h2",{},"Black"),
        React.createElement("h2",{},"Sweet"),
        );
};

const Dog = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h2",{}, "Husky"),
        React.createElement("h2",{}, "Foxy"),
    );
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Adopt Me"),
        React.createElement(Cat),
        React.createElement(Dog)
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);