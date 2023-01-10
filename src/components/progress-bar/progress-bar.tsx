import "./progress-bar.css";

export type ProgressBarProps = {
  label: string;
  backgroundColor?: string;
  percentage: number;
  color: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  backgroundColor = "#eeeeee",
  percentage = 0,
  color = "red"
}) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage not in valid range");
  }
  return (
    <>
      <div className="progressLabel">{label}</div>
      <div
        className="progressVisualFull"
        // to change the background color dynamically
        style={{
          backgroundColor
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
          className="progressVisualPart"
        />
      </div>
    </>
  );
};

export default ProgressBar;
