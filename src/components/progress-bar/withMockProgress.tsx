import React, { useState, useEffect } from "react";

import { ProgressBarProps } from "./progress-bar";

const withMockProgress =
  (
    component: React.FC<ProgressBarProps>,
    stepIntervalMs: number,
    onFinished?: () => void
  ) =>
  ({ ...props }: ProgressBarProps) => {
    const { percentage: propPercentage, ...rest } = props;

    const [percentage, setPercent] = useState<number>(propPercentage);
    useEffect(() => {
      const intervalId: any = setInterval(() => {
        setPercent((percentage) => {
          let newPercentage = percentage + 1;
          if (newPercentage >= 100) {
            clearInterval(intervalId);
            onFinished && onFinished();
            return 100;
          }
          return newPercentage;
        });
      }, stepIntervalMs);

      return () => intervalId && clearInterval(intervalId);
    }, []);
    return component({ percentage, ...rest });
  };

export default withMockProgress;
