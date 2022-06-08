## Updates and Reasoning
- Created a boilerplate with create-react-app
- - This makes it easier to implement TS as a language for creating components as well as some testing features
- Copied over source code into public folder
- - This allowed the use of the legacy code from MooTools
- Created container component
- Created CSS module to handle the CSS of the container
- Created button component
- Created CSS module to handle the CSS of the button
- Created state management within the container component, with a function passed to the button to handle the onClick event
- Added id to MooTools created div (#wording)
- Added id to React created div (#words)
- Added: document.getElementById('words').innerHTML = text; to the MyFunComponent.ButtonClicked method to have communication from the MooTools Component to the React div (#words)
- Created function to show "Four" to both of the divs from the React component as well, making it bi-directional from the React Component and the MooTools component

**This can be done differently using state, but I am wondering if simplicity is the best option in this one situation**
