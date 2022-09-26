import { StaticImageData } from "next/image"

export interface ProjectType {
    id: string
    tilt: string
    title: string
    subTitle: string
    projectImage: string
    role: string
    context: string
    period: string
    introduction: Introduction
    description: Description
  }
  
  export interface Introduction {
    description: string
    projectLink: string
    svgImage: string
  }
  
  export interface Description {
    title: string
    subTitle: string
    descriptionImage: string
    colors: Color[]
    designImage: string
  }
  
  export interface Color {
    name: string
    color: string
  }