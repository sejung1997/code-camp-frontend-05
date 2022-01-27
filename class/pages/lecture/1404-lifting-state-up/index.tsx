import Child1 from "../../../scr/components/units/14-lifting-state-up/Child1";
import Child2 from "../../../scr/components/units/14-lifting-state-up/Child2";
import { useState } from "react";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div>
        ===========================================================================
      </div>
      <Child2 count={count} />
    </div>
  );
}
