// pages/projects/[projectId].js
import { useRouter } from "next/router";
import styles from "../../styles/Projects.module.css";
import Meta from "@/components/GlobalComponents/Meta";
import RealProjects from "./RealProjects";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const [project, setProject] = useState();

  useEffect(() => {
    const l_project = RealProjects.find((data) => {
      return data.id === projectId;
    });
    setProject(l_project);
  }, [projectId]);

  console.log(project);

  return (
    <>
      <Meta
        title={project && project.h3Header}
        keywords={
          "peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
        }
      />
      <div className={styles.detailContainer}>
        <div className={styles.imgCont}>
          <Image
            src={project?.imgSrc}
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            layout="responsive"
            objectFit="cover"
            quality={100}
            width={project?.imgWidth}
            height={project?.imgHeight}
            className={styles.imgProjects}
          />
        </div>
        <div className={styles.contentDiv}>
          <h3>{project && project.h3Header}</h3>
          <h4>{project && project.h4Content}</h4>
          <span>{project && project.span}</span>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
