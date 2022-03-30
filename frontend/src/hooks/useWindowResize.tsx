import { useCallback, useEffect, useState } from "react";

export const useWindowResize = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpen(true);
    }
    resizeEvent();
    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  // 画面をリサイズした時にstate調整
  const resizeEvent = useCallback(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }, [open]);

  return [open, setOpen] as const;
};