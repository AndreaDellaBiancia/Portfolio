import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import Project from "../models/Project";

const projectRepository = dataSource.getRepository(Project);

const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Project[] | any> => {
  try {
    const projects = await projectRepository.find({ order: { id: "asc" } });

    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la recuperation des projets.",
    });
  }
};

const getProjectByTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Project | any> => {
  try {
    const projectTitle: string = req.params.projectTitle;
    const project = await projectRepository.findOne({
      relations: {
        logosTechno: true,
        projectPictures: true,
        projectTargets: true,
        projectFunctionalities: true
    },
      where: { title: projectTitle },
     
    });

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la recuperation des projets.",
    });
  }
};

export { getProjects, getProjectByTitle };
