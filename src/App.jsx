import NewProject from "./components/NewProject";
import Siderbar from "./components/Sidebar";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Siderbar />
      <NewProject />
    </main>
  );
}

export default App;
