"use client";
import { useEffect, useRef } from "react";
import Style from "./process.module.css";

export function Process() {
  const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(Style.show);
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section ref={sectionRef} className={Style.processSection}>
      <h2> From Requirement to Reliable Delivery</h2>

      <ol className={Style.processList}>
  <li>
    <div>
      <strong>Requirement Analysis</strong>
      <div> We translate your needs into clear, measurable specifications.</div>
    </div>
  </li>

  <li>
    <div>
      <strong>Supplier Identification</strong>
      <div> Verified manufacturers selected for capacity, compliance, and reliability.</div>
    </div>
  </li>

  <li>
    <div>
      <strong>Sampling & Approval</strong>
      <div> Physical samples validated before full-scale production begins.</div>
    </div>
  </li>

  <li>
    <div>
      <strong>Production & Quality Check</strong>
      <div> In-process inspections ensure consistency and export standards.</div>
    </div>
  </li>

  <li>
    <div>
      <strong>Export & Delivery</strong>
      <div> Documentation, logistics, and timelines managed end-to-end.</div>
    </div>
  </li>
</ol>

    </section>
  );
}