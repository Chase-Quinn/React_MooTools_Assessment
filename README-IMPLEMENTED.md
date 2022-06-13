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

**Reasoning**
This solution was probably the most simple, and I know it did not show my knowledge besides setting it up beside React and running the components with TypeScript. The reason I used this solution was because not all problems require complex code to solve them. In this instance, all that was asked was the React component update the MooTools component, and vice versa.  I was able to do this by using innerHTML between the two divs.  It required much less code to implement, and it ended in the requested outcome.

I could have utilized a portal within the MooTools div, set within React.  I could have also had a hidden input that on change, updated the state within the React component and forced a rerender so that it updated in the same way.  That outcome would have been similar, but would have required much more code for the same outcome.
