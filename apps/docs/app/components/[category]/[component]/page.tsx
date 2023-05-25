"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState} from "react";
import styles from "./page.module.css";
import { ComponentSandbox } from "../../../_components/ComponentSandbox";
import { MarkdownRenderer } from "../../../_components/MarkdownRenderer";
import Button from "ui/comps/controls/button"

export default function Page({ params }) {
  const Component = dynamic(() => import(`ui/comps/${params.category}/${params.component}/`));
  const Description = dynamic(() => import(`ui/comps/${params.category}/${params.component}/readme.mdx`));

  const [propertyControls, setPropertyControls] = useState<any>();

  useEffect(()=> {
    const loadPropertyControls = async () => {
      return await import(`ui/comps/${params.category}/${params.component}/`).then((module) => module.propertyControls)
    }

    loadPropertyControls().then(result => setPropertyControls(result))
  }, [params.category, params.component, setPropertyControls])


  return (
    <div className={styles.datasheet}>
      <MarkdownRenderer>
        <Description />
      </MarkdownRenderer>
      
      <ComponentSandbox
        component={Component}
        controls={propertyControls}
        className={styles.sandbox}
      />
    </div>
  );
}