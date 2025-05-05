import { Toaster, toast } from "sonner";

// ...

function App() {
  return (
    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
      <Toaster />
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
    </div>
  );
}

export default App;
