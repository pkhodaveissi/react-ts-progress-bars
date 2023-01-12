import { useState } from "react";

type ChildrenProps = {
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  currentQueue: Array<string>;
  waitingList: number;
};

type QueueManagerProps = {
  concurrentItems: number;
  children: React.FC<ChildrenProps>;
};

const QueueManager: React.FC<QueueManagerProps> = ({
  concurrentItems,
  children
}) => {
  const [queue, setQueue] = useState<Array<string>>([]);
  const addItem = (newItem: string) => setQueue([...queue, newItem]);
  const removeItem = (itemToRemove: string) => {
    setQueue((queue) => [...queue.filter((item) => item !== itemToRemove)]);
  };
  const waitingList = queue.length - concurrentItems;
  return children({
    addItem,
    removeItem,
    currentQueue: queue.slice(0, concurrentItems),
    waitingList: waitingList > 0 ? waitingList : 0
  });
};

export default QueueManager;
