import ProgressBar from "./components/progress-bar";
import withMockProgress from "./components/progress-bar/with-mock-progress";
import QueueManager from "./components/queue-manager";

const WithMockProgressBar = withMockProgress(ProgressBar, 100);

export default function App() {
  return (
    <div>
      <QueueManager concurrentItems={5}>
        {({ currentQueue, addItem, removeItem, waitingList }) => (
          <>
            <button onClick={() => addItem(new Date().toISOString())}>
              Add new progress bar {!!waitingList && `on wait: ${waitingList}`}
            </button>
            {currentQueue.map((item) => (
              <WithMockProgressBar
                key={item}
                label={`item added on ${item}`}
                percentage={1}
                color="purple"
                onFinish={() => removeItem(item)}
              />
            ))}
          </>
        )}
      </QueueManager>
    </div>
  );
}
