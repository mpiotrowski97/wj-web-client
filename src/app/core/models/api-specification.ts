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
  name: string;
  exercisesIds: string[];
}

export interface TrainingPlanDetailsDto {
  id: string;
  name: string;
  description: string;
  days: TrainingPlanDayDetailsDto[];
}

export interface TrainingPlanDayDetailsDto {
  id: string;
  name: string;
  exercises: ExerciseDto[];
}

export interface TrainingListItemDto {
  id: string;
  date: string;
  trainingPlanName: string;
  trainingPlanDayName: string;
}

export interface TrainingDetailsDto {
  id: string;
  date: string;
  trainingPlanName: string;
  trainingPlanDayName: string;
  exercises: TrainingExerciseDto[];
}

export interface TrainingExerciseDto {
  id: string;
  name: string;
  series: TrainingExerciseSeries[];
}

export interface TrainingExerciseSeries {
  id: string;
  repetition: number;
  score: number;
}
