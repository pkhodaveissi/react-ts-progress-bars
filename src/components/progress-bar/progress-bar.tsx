import { useEffect, useState } from "react";
import "./progress-bar.css";

type VisualPartType = {
  percentage: number;
  color: string;
};
type ProgressBarProps = {
  label: string;
  backgroundColor?: string;
  visualParts: Array<VisualPartType>;
};

const ProgressBar = ({
  label,
  backgroundColor = "#eeeeee",
  visualParts = [
    {
      percentage: 0,
      color: "white"
    }
  ]
}: ProgressBarProps): JSX.Element => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

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
        {visualParts.map((item, index) => {
          return (
            <div
              // There won't be additional changes in the array so the index can be used
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              style={{
                width: `${widths[index]}%`,
                backgroundColor: item.color
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </>
  );
};

export default ProgressBar;
