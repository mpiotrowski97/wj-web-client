import { User } from './user';

export interface ContextInitResponse {
  currentLoggedUser: User;
  categories: any[];
}

export interface LoginModelResponse {
  user: User;
}

export interface Pageable<T> {
  content: T[];
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface CreateExerciseResponse {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  type: string;
  category: string;
}

export interface CreateExerciseRequest {
  name: string;
  description: string;
  videoUrl: string;
  type: string;
  category: string;
}

export interface ExerciseDto {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  type: string;
  category: string;
}

export interface TrainingPlanDto {
  id: string;
  name: string;
  description: string;
  days: TrainingPlanDayDto[];
}

export interface TrainingPlanDayDto {
  id: string;
  trainingPlanId: string;
  exercisesIds: string[];
}
