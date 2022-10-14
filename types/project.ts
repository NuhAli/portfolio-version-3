import { INavigationProps } from "./navigation";

export interface ProjectType {
  id: string;
  tilt: string;
  title: string;
  subTitle: string;
  projectImage: string;
  role: string;
  context: string;
  period: string;
  backgroundColor: string;
  backgroundColor1: string;
  introduction: Introduction;
  description: Description;
  navigation: INavigationProps
}

export interface Introduction {
  description: string;
  projectLink: string;
  svgImage: string;
  color: string;
}

export interface Description {
  title: string;
  subTitle: string;
  body: string;
  descriptionImage: string;
  colors: Color[];
  designArea?: boolean;
  designImage: string;
  accentColor: string;
}

export interface Color {
  name: string;
  color: string;
}
