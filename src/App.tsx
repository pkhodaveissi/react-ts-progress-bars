import ProgressBar from "./components/progress-bar";

export default function App() {
  return (
    <div>
      <ProgressBar
        label="1st"
        visualParts={[
          {
            percentage: 20,
            color: "purple"
          }
        ]}
      />
    </div>
  );
}
