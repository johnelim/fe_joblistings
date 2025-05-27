import "./App.css";
import Header from "./components/Header";
import JobBoard from "./components/JobBoard";
import ActiveFilterProvider from "./contexts/ActiveFilterProvider";

function App() {
  return (
    <div className="h-screen w-screen">
      <ActiveFilterProvider>
        <Header />
        <JobBoard />
      </ActiveFilterProvider>
    </div>
  );
}

export default App;
