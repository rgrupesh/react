const Cat = ({name,color,type}) => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},name),
        React.createElement("h2",{},color),
        React.createElement("h2",{},type),
        );
};

const Dog = ({type, look}) => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{}, type),
        React.createElement("h2",{}, look),
    );
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Hello World"),
        React.createElement(Cat, {
            name : "Luna",
            color: "Black",
            type : "Sweet",
        }),
        React.createElement(Dog,{
            type: "Sheperd",
            look : "Foxy",
        })
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);