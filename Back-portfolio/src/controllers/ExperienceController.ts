import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import Experience from "../models/Experience";




const userRepository = dataSource.getRepository(Experience);

interface Experiences{
  left : Experience[],
  right : Experience[]
}

const getExperiences = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Experiences | any> => {
  try {
    const leftExperience = await userRepository.find({
      relations: {
        logosTechno: true,
        effectIn: true,
        effectOut: true
    },
      where: { side: "left" },
      order: { position: "asc" },
    });

    const rightExperience = await userRepository.find({
      relations: {
        logosTechno: true,
        effectIn: true,
        effectOut: true
    },
      where: { side: "right" },
      order: { position: "asc" },

    });

    const experiences : Experiences = {"left" : leftExperience, "right" : rightExperience}

    return res.status(200).json(experiences);
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la recuperation des experiences.",
    });
  }
};


export {
  getExperiences,
};
