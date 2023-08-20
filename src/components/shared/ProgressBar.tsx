interface Props {
  completionPercentage: number;
}

function ProgressBar({ completionPercentage }: Props) {
  return (
    <div className="progress-bar">
      <div
        className="active"
        style={{ width: `${completionPercentage * 3}px` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
