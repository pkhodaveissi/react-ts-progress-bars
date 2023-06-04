import React, { useState, useEffect } from "react";

import { ProgressBarProps } from "./progress-bar";
type WithMockProgressProps = ProgressBarProps & {
  onFinish?: () => void;
};
const withMockProgress = (
  component: React.FC<ProgressBarProps>,
  stepIntervalMs: number
) => ({ ...props }: WithMockProgressProps) => {
  const { percentage: propPercentage, onFinish, ...rest } = props;

  const [percentage, setPercent] = useState<number>(propPercentage);
  useEffect(() => {
    const intervalId: any = setInterval(() => {
      requestAnimationFrame(() => {
        setPercent((percentage) => {
          let newPercentage = percentage + 1;
          if (newPercentage >= 100) {
            clearInterval(intervalId);
            if (onFinish instanceof Function) {
              onFinish();
            }
            return 100;
          }
          return newPercentage;
        });
      });
    }, stepIntervalMs);

    return () => intervalId && clearInterval(intervalId);
  }, [onFinish]);
  return component({
    percentage,
    style: { transition: `width ${stepIntervalMs / 1000}s linear` },
    ...rest
  });
};

export default withMockProgress;
