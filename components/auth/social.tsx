"use client";

import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="w-full gap-x-2 flex">
      <Button size="lg" className="w-1/2" variant="outline" onClick={() => {}}>
        Google
      </Button>
      <Button size="lg" className="w-1/2" variant="outline" onClick={() => {}}>
        GitHub
      </Button>
    </div>
  );
};
