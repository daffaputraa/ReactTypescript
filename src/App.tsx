import Button from "./assets/components/Button";

function App() {
  const onClick = (): any => {
    return 1 + "string";
  };

  return (
    <>
      <p>Test</p>
      <Button
        onClick={onClick}
        style={{ margin: "2px" }}
        // style={{ display: "flex", marginTop: "20px", color: "wanr" }}
      />
    </>
  );
}

export default App;
