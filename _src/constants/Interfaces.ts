export interface Todo {
  stepId: number;
  comment?: string;
  dateCreated: Date;
  dateDone?: Date;
  done?: boolean;
  skipped?: boolean;
}

export interface SnowflakeStep {
  id: number;
  name: string;
  description?: string;
  reminderText?: string[];
  todo?: Todo;
}

export interface Snowflake {
  steps: SnowflakeStep[];
}

export interface Character {
  id: string;
  name: string;
  goal: string;
  motivation: string;
  epiphany: string;
  perspectiveSummary: string;
  notes: string;
}

export interface User {
  id: number;
  name: string;
  mySnowflake: Snowflake;
}
