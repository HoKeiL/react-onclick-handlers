function TestButton(): JSX.Element {
  return (
    <button onClick={() => window.open("Hello from test button!")}>
      Make me do something when I'm clicked...
    </button>
  );
}

export default TestButton;
