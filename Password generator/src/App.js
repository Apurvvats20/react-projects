import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numbersAl, setNumbersAl] = useState(false);
  const [charAl, setCharAl] = useState(false);
  const [pass, setPass] = useState("");

  let passwordGenerator = useCallback(() => {
    let password = "";
    let str = "QWIOPqwertyuioERTpasASDFGHJKLXCVBNYUMdfghjklzxcvbnm";
    if (numbersAl) {
      str += "173245980";
    }
    if (charAl) {
      str += "!@#$%^&*?|}{~`<>";
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * length + 1);
      password += str.charAt(char);
    }
    setPass(password);
  }, [length, charAl, numbersAl, setPass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAl, numbersAl, passwordGenerator]);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  let passwordRef = useRef(null);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              onChange={() => {
                setNumbersAl((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              onChange={() => {
                setCharAl((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
