export interface AlmeriaImage {
  url: string;
  alt: string;
}

export type JobType = 'Construcción' | 'Carpintería Metálica';

export interface JobApplicationData {
  nombre: string;
  email: string;
  telefono: string;
  edad?: string;
  experiencia: string;
}

