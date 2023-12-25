import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Siderbar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelect={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Siderbar onSelect={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;

/* maxmillian solution of managing state to switch between components
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelect={handleStartAddProject} />
  }
*/

/* My solution (it works but maxmillian wants to store projects and my way does not store projects)
  const [projectSelected, setProjectSelected] = useState(false);

  function handleSelect() {
    setProjectSelected(true);
  }

  return (
    {projectSelected ? (
        <NewProject />
      ) : (
        <NoProjectSelected onSelect={handleSelect} />
      )}
  )

*/
