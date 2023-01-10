import ProgressBar from "./components/progress-bar";
import withMockProgress from "./components/progress-bar/withMockProgress";
const WithMockProgressBar = withMockProgress(ProgressBar, 100);
export default function App() {
  return (
    <div>
      <WithMockProgressBar label="1st" percentage={1} color="purple" />
    </div>
  );
}
