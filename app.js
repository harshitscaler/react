// const heading = React.createElement(
//     'h1',
//      {id: 'heading' , xyz: 'abc'},
//       'Hello World! from React'
//     );
//     console.log(heading);


const parent = React.createElement(
    "div",
    {id: "parent"},
    [ React.createElement(
        "div", 
        {id: 'child'},
        [React.createElement('h1', {}, 'I am an h1 tag') , React.createElement('h2', {}, 'I am an h2 tag')]
        ),
     React.createElement(
        "div", 
        {id: 'child'},
        [React.createElement('h1', {}, 'I am an h1 tag') , React.createElement('h2', {}, 'I am an h2 tag')]
        ),
    ]);
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);


/*
<div id="parent">
    <div id="child">
        <h1>Hello World!</h1>
    </div>
</div>



*/