'use client'
import { useEffect, useState } from "react";

export function useSkeleton(duration: number) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  return loading;
}